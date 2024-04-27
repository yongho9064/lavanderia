package com.kyungmin.lavanderia.member.data.dto;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignupDTO {

    @Schema(description = "회원 아이디", example = "user", required = true)
    private String memberId;
    @Schema(description = "회원 비밀번호", example = "123", required = true)
    private String memberPwd;
    @Schema(description = "회원 이름", example = "이용호", required = true)
    private String memberName;
    @Schema(description = "회원 이메일", example = "abc@naver.com", required = true)
    private String memberEmail;
    @Schema(description = "회원 전화번호", example = "010-1234-5678", required = true)
    private String memberPhone;
    @Schema(description = "마케팅 동의 여부", example = "N", required = true)
    private String agreeMarketingYn;
}
