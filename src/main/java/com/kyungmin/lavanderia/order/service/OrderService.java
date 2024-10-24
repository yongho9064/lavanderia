package com.kyungmin.lavanderia.order.service;

import com.kyungmin.lavanderia.member.data.entity.Member;
import com.kyungmin.lavanderia.order.data.dto.OrderDTO.OrderInsert;

public interface OrderService {
    Long insertOrder(Member member, OrderInsert order);
}