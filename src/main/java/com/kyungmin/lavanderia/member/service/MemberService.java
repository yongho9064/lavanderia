package com.kyungmin.lavanderia.member.service;

import com.kyungmin.lavanderia.member.data.dto.SignupDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface MemberService extends UserDetailsService {

    void signup(SignupDTO signupDto);

    void checkMemberId(String memberId);

    void checkPhoneNumber(String phoneNumber);

}
