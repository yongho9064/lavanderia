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

//    private ResponseEntity<String> response(HttpStatus httpStatus,String result) {
//        return ResponseEntity.status(httpStatus)
//                .header(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_PLAIN_VALUE + ";charset=UTF-8")
//                .body(result);
//    }

}
