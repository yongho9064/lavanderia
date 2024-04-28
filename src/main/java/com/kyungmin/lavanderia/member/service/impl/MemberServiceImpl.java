package com.kyungmin.lavanderia.member.service.impl;

import com.kyungmin.lavanderia.member.data.dto.SignupDTO;
import com.kyungmin.lavanderia.member.data.entity.MemberEntity;
import com.kyungmin.lavanderia.member.data.repository.MemberRepository;
import com.kyungmin.lavanderia.member.service.MemberService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service

public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final RedisTemplate<String, Object> redisTemplate;
    private final JavaMailSender javaMailSender;

    public MemberServiceImpl(MemberRepository memberRepository, BCryptPasswordEncoder passwordEncoder, RedisTemplate<String, Object> redisTemplate, JavaMailSender javaMailSender) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.redisTemplate = redisTemplate;
        this.javaMailSender = javaMailSender;
    }


    @Override
    public void signup(SignupDTO signupDto) {

        // 회원 중복 체크
        Boolean isExist = memberRepository.existsById(signupDto.getMemberId());

        if (isExist) {
            return;
        }

        MemberEntity memberEntity = MemberEntity.builder()
                .memberId(signupDto.getMemberId())
                .memberPwd(passwordEncoder.encode(signupDto.getMemberPwd()))
                .memberName(signupDto.getMemberName())
                .memberEmail(signupDto.getMemberEmail())
                .memberPhone(signupDto.getMemberPhone())
                .agreeMarketingYn(signupDto.getAgreeMarketingYn())
                .build();

        memberRepository.save(memberEntity);
    }

    @Override
    public String checkPhoneNumber(String phoneNumber) {

        Boolean isExist = memberRepository.existsByMemberPhone(phoneNumber);

        if (isExist) {
            return "이미 가입된 전화번호입니다";
        }

        return "가입이 가능한 전화번호입니다";
    }

    @Override
    public String sendSignupCode(String email) {

        int code = (int) (Math.random() * 1000000);

        String subject = "Lavanderia 이메일 인증" ;
        String text = "Lavanderia 이메일 인증코드는 " + code + " 입니다";

        redisTemplate.opsForValue().set(email,String.valueOf(code));

        return sendEmailUtil(email,subject,text);
    }


    @Override
    public String checkSignupCode(String email, String code) {

        String getCode = (String) redisTemplate.opsForValue().get(email);

        if (code.equals(getCode)) {
            redisTemplate.delete(email);
            return "이메일 인증 성공";
        }

        return "이메일 인증 실패";
    }

    @Override
    public String sendEmail(String email, String subject, String text) {
        return sendEmailUtil(email,subject,text);
    }

    public String sendEmailUtil(String email, String subject, String text) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        try {

            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
            mimeMessageHelper.setTo(email); // 메일 수신자
            mimeMessageHelper.setSubject(subject); // 메일 제목
            mimeMessageHelper.setText(text); // 메일 본문 내용
            javaMailSender.send(mimeMessage);

        } catch (MessagingException e) {
            e.printStackTrace();
            return "이메일 전송 실패";
        }

        return "이메일 전송 성공";
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<MemberEntity> memberEntity = memberRepository.findById(username);

        if (memberEntity.isPresent()) {
            return memberEntity.get();
        }
        return null;
    }
}
