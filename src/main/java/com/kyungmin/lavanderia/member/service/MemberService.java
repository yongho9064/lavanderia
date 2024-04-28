package com.kyungmin.lavanderia.member.service;

import com.kyungmin.lavanderia.member.data.dto.SignupDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface MemberService extends UserDetailsService {
    public void signup(SignupDTO signupDto);

    public String checkPhoneNumber(String phoneNumber);

    public String sendSignupCode(String email);

    public String checkSignupCode(String email, String code);

    public String sendEmail(String email,String subject, String text);
}
