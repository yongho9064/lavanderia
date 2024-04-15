package com.kyungmin.lavanderia.jwt.service.impl;

import com.kyungmin.lavanderia.jwt.data.entity.RefreshEntity;
import com.kyungmin.lavanderia.jwt.data.repository.RefreshRepository;
import com.kyungmin.lavanderia.jwt.service.ReissueService;
import com.kyungmin.lavanderia.jwt.util.JWTUtil;
import com.kyungmin.lavanderia.jwt.util.TokenExpirationTime;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ReissueServiceImpl implements ReissueService {
    private Long accessExpiredMs = TokenExpirationTime.ACCESS_TIME;
    private Long refreshExpiredMs = TokenExpirationTime.REFRESH_TIME;

    private final JWTUtil jwtUtil;
    private final RefreshRepository refreshRepository;

    public ReissueServiceImpl(JWTUtil jwtUtil,RefreshRepository refreshRepository) {
        this.jwtUtil = jwtUtil;
        this.refreshRepository = refreshRepository;
    }
    @Override
    public ResponseEntity<?> reissue(HttpServletRequest request, HttpServletResponse response) {

        // refresh 토큰 쿠키에서 추출

        String refresh = null;
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("refresh")) {

                refresh = cookie.getValue();
            }
        }

        // refresh 없으면
        if (refresh == null) {

            // refresh 없으면 오류 리턴
            return new ResponseEntity<>("refresh token null", HttpStatus.BAD_REQUEST);
        }

        // 유효시간 검사
        try {
            jwtUtil.isExpired(refresh);
        } catch (ExpiredJwtException e) {

            // 유효시간 만료면 오류 리턴
            return new ResponseEntity<>("refresh token expired", HttpStatus.BAD_REQUEST);
        }

        // 토큰이 refresh인지 확인 (발급시 페이로드에 명시)
        String category = jwtUtil.getCategory(refresh);

        if (!category.equals("refresh")) {

            // 카테고리가 refresh가 아니면 오류 리턴
            return new ResponseEntity<>("invalid refresh token", HttpStatus.BAD_REQUEST);
        }

        //DB에 저장되어 있는지 확인
        Boolean isExist = refreshRepository.existsByRefresh(refresh);
        if (!isExist) {

            // DB에 없으면 오류 리턴
            return new ResponseEntity<>("invalid refresh token", HttpStatus.BAD_REQUEST);
        }

        String memberId = jwtUtil.getMemberId(refresh);
        String role = jwtUtil.getRole(refresh);

        //make new JWT
        String newAccess = jwtUtil.createJwt("access", memberId, role, accessExpiredMs);
        String newRefresh = jwtUtil.createJwt("refresh", memberId, role, refreshExpiredMs);

        //Refresh 토큰 저장 DB에 기존의 Refresh 토큰 삭제 후 새 Refresh 토큰 저장
        refreshRepository.deleteByRefresh(refresh);
        addRefreshEntity(memberId, newRefresh, refreshExpiredMs);

        //response
        response.setHeader("access", newAccess);
        response.addCookie(createCookie("refresh", newRefresh));

        return new ResponseEntity<>(HttpStatus.OK);
    }

    private Cookie createCookie(String key, String value) {

        Cookie cookie = new Cookie(key, value);
        cookie.setMaxAge(24*60*60);
        //cookie.setSecure(true);
        //cookie.setPath("/");
        cookie.setHttpOnly(true);

        return cookie;
    }

    private void addRefreshEntity(String memberId, String refresh, Long expiredMs) {

        RefreshEntity refreshEntity = RefreshEntity.builder()
                .memberId(memberId)
                .refresh(refresh)
                .expiration(expiredMs)
                .build();

        refreshRepository.save(refreshEntity);
    }

}
