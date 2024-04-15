package com.kyungmin.lavanderia.jwt.controller;

import com.kyungmin.lavanderia.jwt.service.ReissueService;
import com.kyungmin.lavanderia.jwt.util.JWTUtil;
import com.kyungmin.lavanderia.jwt.data.entity.RefreshEntity;
import com.kyungmin.lavanderia.jwt.data.repository.RefreshRepository;
import com.kyungmin.lavanderia.jwt.util.TokenExpirationTime;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class ReissueController {

    private final ReissueService reissueService;

    public ReissueController(ReissueService reissueService) {
        this.reissueService = reissueService;
    }

    @PostMapping("/reissue")
    public ResponseEntity<?> reissue(HttpServletRequest request, HttpServletResponse response) {
        return reissueService.reissue(request, response);
    }
}
