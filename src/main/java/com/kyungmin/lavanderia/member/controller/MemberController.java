package com.kyungmin.lavanderia.member.controller;

import com.kyungmin.lavanderia.member.data.dto.SignupDto;
import com.kyungmin.lavanderia.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@ResponseBody
public class MemberController {

    private MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/signup")
    public String signup(@RequestBody SignupDto signupDto) {
        memberService.signup(signupDto);
        return "ok";
    }


}
