package com.kyungmin.lavanderia.order.controller;

import com.kyungmin.lavanderia.global.ResponseEntityUtil;
import com.kyungmin.lavanderia.member.data.entity.Member;
import com.kyungmin.lavanderia.order.data.dto.OrderDTO.OrderInsert;
import com.kyungmin.lavanderia.order.service.OrderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Tag(name = "주문 API")
@RequestMapping("/order")
@RequiredArgsConstructor
@RestController
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/add")
    @Operation(summary = "주문 추가", description = "주문 정보를 추가합니다")
    public ResponseEntity<String> addOrder(@RequestBody OrderInsert orderDTO, @AuthenticationPrincipal Member member) {

        orderService.insertOrder(member.getMemberId(), orderDTO);

        return ResponseEntityUtil.response("주문 정보가 추가 되었습니다.", HttpStatus.OK);
    }
}