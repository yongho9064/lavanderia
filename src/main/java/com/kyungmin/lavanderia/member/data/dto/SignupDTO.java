package com.kyungmin.lavanderia.member.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignupDTO {

    private String memberId;
    private String memberPwd;
    private String memberName;
    private String memberEmail;
    private String memberPhone;
    private String agreeMarketingYn;
}
