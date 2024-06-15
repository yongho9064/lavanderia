package com.kyungmin.lavanderia.global.util.email.service;

public interface EmailService {

    void sendSignupCode(String email);

    void checkSignupCode(String email, String token);
}
