package com.kyungmin.lavanderia.member.controller;

import com.kyungmin.lavanderia.member.data.dto.CheckCodeDTO;
import com.kyungmin.lavanderia.member.data.dto.SignupDTO;
import com.kyungmin.lavanderia.member.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Tag(name = "회원 API")
public class MemberApiController {

    private final MemberService memberService;

    @PostMapping("/signup")
    @Operation(summary = "회원 가입", description = "새로운 회원을 등록합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "회원 가입 완료", content = @Content(mediaType = "application/json")),
    })
    public ResponseEntity<String> signup(@RequestBody SignupDTO signupDto) {
        memberService.signup(signupDto);

        return ResponseEntity.status(HttpStatus.CREATED)
                .header(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_PLAIN_VALUE + ";charset=UTF-8")
                .body("회원 가입 완료");
    }

    @PostMapping("/check-phone-number")
    @Operation(summary = "전화번호 중복 확인", description = "전화번호 중복을 확인합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "전화번호 가입 가능", content = @Content(mediaType = "application/json")),
    })
    public ResponseEntity<String> checkPhoneNumber(@RequestBody String phoneNumber) {

        String result = memberService.checkPhoneNumber(phoneNumber);

        return ResponseEntity.status(HttpStatus.CREATED)
                .header(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_PLAIN_VALUE + ";charset=UTF-8")
                .body(result);
    }

    @PostMapping("/send-code")
    @Operation(summary = "이메일 인증코드 전송", description = "이메일 인증코드를 전송합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "이메일 인증코드 전송 완료", content = @Content(mediaType = "application/json")),
    })
    public ResponseEntity<String> sendSignupCode(@RequestBody String email) {



        String result = memberService.sendSignupCode(email);


        return ResponseEntity.status(HttpStatus.CREATED)
                .header(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_PLAIN_VALUE + ";charset=UTF-8")
                .body(result);
    }

    @PostMapping("/check-code")
    @Operation(summary = "이메일 인증코드 검사", description = "이메일 인증코드를 검사합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "이메일 인증코드 검사 완료", content = @Content(mediaType = "application/json")),
    })
    public ResponseEntity<String> checkSignupCode(@RequestBody CheckCodeDTO checkCodeDTO) {

        String result = memberService.checkSignupCode(checkCodeDTO.getEmail(), checkCodeDTO.getCode());

        return ResponseEntity.status(HttpStatus.CREATED)
                .header(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_PLAIN_VALUE + ";charset=UTF-8")
                .body(result);
    }
}
