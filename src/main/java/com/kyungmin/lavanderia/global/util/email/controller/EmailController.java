package com.kyungmin.lavanderia.global.util.email.controller;

import com.kyungmin.lavanderia.global.util.email.data.dto.CheckTokenDTO;
import com.kyungmin.lavanderia.global.util.email.service.EmailService;
import com.kyungmin.lavanderia.member.exception.EmailAuthenticationFailedEx;
import com.kyungmin.lavanderia.member.exception.EmailSendFailedEx;
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
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Tag(name = "email API")
public class EmailController {

    private final EmailService emailService;

    @PostMapping("/send-signup-code")
    @Operation(summary = "회원가입 이메일 전송", description = "회원가입 이메일 인증코드를 전송합니다")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "이메일 전송 성공", content = @Content(mediaType = "application/json")),
            @ApiResponse(responseCode = "400", description = "이메일 전송 실패", content = @Content(mediaType = "application/json")),
    })
    public ResponseEntity<String> sendSignupCode(@RequestBody String email) {
        HttpStatus httpStatus;
        String result;

        try {
            emailService.sendSignupCode(email);
            httpStatus = HttpStatus.CREATED;
            result = "이메일 전송 성공";
        } catch (EmailSendFailedEx e) {
            httpStatus = HttpStatus.BAD_REQUEST;
            result = "이메일 전송 실패";
        }

        return response(httpStatus, result);
    }

    private ResponseEntity<String> response(HttpStatus httpStatus,String result) {
        return ResponseEntity.status(httpStatus)
                .header(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_PLAIN_VALUE + ";charset=UTF-8")
                .body(result);
    }

}
