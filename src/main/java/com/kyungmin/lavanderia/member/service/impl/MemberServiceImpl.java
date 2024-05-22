package com.kyungmin.lavanderia.member.service.impl;

import com.kyungmin.lavanderia.member.data.dto.SignupDTO;
import com.kyungmin.lavanderia.member.data.entity.Member;
import com.kyungmin.lavanderia.member.data.repository.MemberRepository;
import com.kyungmin.lavanderia.member.exception.DuplicateMemberIdEx;
import com.kyungmin.lavanderia.member.exception.DuplicatePhoneNumberEx;
import com.kyungmin.lavanderia.member.exception.EmailAuthenticationFailedEx;
import com.kyungmin.lavanderia.member.exception.EmailSendFailedEx;
import com.kyungmin.lavanderia.member.service.MemberService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final RedisTemplate<String, Object> redisTemplate;
    private final JavaMailSender javaMailSender;


    @Override
    public void signup(SignupDTO signupDto) {

        Member member = Member.builder()
                .memberId(signupDto.getMemberId())
                .memberPwd(passwordEncoder.encode(signupDto.getMemberPwd()))
                .memberName(signupDto.getMemberName())
                .memberEmail(signupDto.getMemberEmail())
                .memberPhone(signupDto.getMemberPhone())
                .agreeMarketingYn(signupDto.getAgreeMarketingYn())
                .build();

        memberRepository.save(member);
    }

    @Override
    public void checkMemberId(String memberId) {

        boolean isExist = memberRepository.existsById(memberId);

        if (isExist) {
            throw new DuplicateMemberIdEx(memberId);
        }
    }

    @Override
    public void checkPhoneNumber(String phoneNumber) {

        boolean isExist = memberRepository.existsByMemberPhone(phoneNumber);

        if (isExist) {
            throw new DuplicatePhoneNumberEx(phoneNumber);
        }
    }

    @Override
    public void sendSignupCode(String email) {

        int code = (int) (Math.random() * 1000000);

        String subject = "Lavanderia 이메일 인증" ;
        String text = "Lavanderia 이메일 인증코드는 " + code + " 입니다";

        redisTemplate.opsForValue().set("Email Authentication Code, Member Email : " + email,String.valueOf(code),5, TimeUnit.MINUTES);

        try {
            sendEmailUtil(email, subject, text);
        } catch (MessagingException e) {
            throw new EmailSendFailedEx(email, e);
        }

    }


    @Override
    public void checkSignupCode(String email, String code) {

        String getCode = (String) redisTemplate.opsForValue().get(email);

        if (code.equals(getCode)) {
            redisTemplate.delete(email);
        } else {
            throw new EmailAuthenticationFailedEx(email);
        }
    }

    @Override
    public void sendEmail(String email, String subject, String text) {
        try {
            sendEmailUtil(email, subject, text);
        } catch (MessagingException e) {
            throw new EmailSendFailedEx(email, e);
        }
    }

    public void sendEmailUtil(String email, String subject, String text) throws MessagingException{
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
        mimeMessageHelper.setTo(email); // 메일 수신자
        mimeMessageHelper.setSubject(subject); // 메일 제목
        mimeMessageHelper.setText(text); // 메일 본문 내용
        javaMailSender.send(mimeMessage);

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Member> memberEntity = memberRepository.findById(username);

        if (memberEntity.isPresent()) {
            return memberEntity.get();
        }
        return null;
    }
}
