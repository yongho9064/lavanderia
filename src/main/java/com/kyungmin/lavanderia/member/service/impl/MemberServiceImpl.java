package com.kyungmin.lavanderia.member.service.impl;

import com.kyungmin.lavanderia.member.data.dto.MemberInfoDTO;
import com.kyungmin.lavanderia.member.data.dto.SignupDTO;
import com.kyungmin.lavanderia.member.data.entity.Member;
import com.kyungmin.lavanderia.member.data.repository.MemberRepository;
import com.kyungmin.lavanderia.member.exception.DuplicateMemberIdEx;
import com.kyungmin.lavanderia.member.exception.DuplicatePhoneNumberEx;
import com.kyungmin.lavanderia.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public void signup(SignupDTO signupDto) {

        Member member = Member.builder()
                .memberId(signupDto.getMemberId())
                .memberPwd(passwordEncoder.encode(signupDto.getMemberPwd()))
                .memberName(signupDto.getMemberName())
                .memberEmail(signupDto.getMemberEmail())
                .memberPhone(signupDto.getMemberPhone())
                .agreeMarketingYn(signupDto.getAgreeMarketingYn())
                .memberBirth(signupDto.getMemberBirth())
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

    // 회원정보 조회
    @Override
    public MemberInfoDTO memberInfo(String memberId) {
        Member member = findMemberByMemberId(memberId);

        return MemberInfoDTO.builder()
                .memberId(member.getMemberId())
                .memberName(member.getMemberName())
                .memberEmail(member.getMemberEmail())
                .memberPhone(member.getMemberPhone())
                .memberBirth(member.getMemberBirth())
                .memberLevel(member.getMemberLevel())
                .memberPoint(member.getMemberPoint())
                .agreeMarketingYn(member.getAgreeMarketingYn())
                .build();
    }

    @Override
    public void memberDelete(String memberId) {
        Member member = findMemberByMemberId(memberId);
        memberRepository.delete(member);
    }

    // 회원 아이디로 회원 조회
    Member findMemberByMemberId(String memberId) {
        Optional<Member> member = memberRepository.findMemberByMemberId(memberId);
        if (member.isEmpty()) {
            throw new UsernameNotFoundException(memberId + "회원을 찾을 수 없습니다.");
        }
        return member.get();
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
