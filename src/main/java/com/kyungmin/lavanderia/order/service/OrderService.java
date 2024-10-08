package com.kyungmin.lavanderia.order.service;

import com.kyungmin.lavanderia.order.data.dto.OrderDTO.OrderInsert;

public interface OrderService {
    Long insertOrder(String memberId, OrderInsert order);
}