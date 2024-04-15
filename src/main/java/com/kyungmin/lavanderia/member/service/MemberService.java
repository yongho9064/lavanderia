package com.kyungmin.lavanderia.member.service;

import com.kyungmin.lavanderia.member.data.dto.SignupDto;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface MemberService extends UserDetailsService {
    public void signup(SignupDto signupDto);
}
