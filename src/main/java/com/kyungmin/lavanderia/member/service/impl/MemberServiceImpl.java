package com.kyungmin.lavanderia.member.service.impl;

import com.kyungmin.lavanderia.jwt.util.CustomUserDetails;
import com.kyungmin.lavanderia.member.data.dto.SignupDto;
import com.kyungmin.lavanderia.member.data.entity.MemberEntity;
import com.kyungmin.lavanderia.member.data.repository.MemberRepository;
import com.kyungmin.lavanderia.member.service.MemberService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service

public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public MemberServiceImpl(MemberRepository memberRepository, BCryptPasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public void signup(SignupDto signupDto) {

        // 회원 중복 체크
        Boolean isExist = memberRepository.existsById(signupDto.getMemberId());

        if (isExist) {
            return;
        }

        MemberEntity memberEntity = MemberEntity.builder()
                .memberId(signupDto.getMemberId())
                .memberPwd(passwordEncoder.encode(signupDto.getMemberPwd()))
                .memberName(signupDto.getMemberName())
                .memberRole("ROLE_USER")
                .build();

        memberRepository.save(memberEntity);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<MemberEntity> memberEntity = memberRepository.findById(username);

        if (memberEntity.isPresent()) {
            return new CustomUserDetails(memberEntity.get());
        }
        return null;
    }
}
