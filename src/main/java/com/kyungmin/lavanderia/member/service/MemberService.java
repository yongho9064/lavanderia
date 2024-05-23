package com.kyungmin.lavanderia.member.service;

import com.kyungmin.lavanderia.member.data.dto.SignupDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface MemberService extends UserDetailsService {

    void signup(SignupDTO signupDto);

    void checkMemberId(String memberId);

    void checkPhoneNumber(String phoneNumber);

    void sendSignupCode(String email);

    void checkSignupCode(String email, String code);

    void sendEmail(String email,String subject, String text);

}
