package com.kyungmin.lavanderia.order.service;

import com.kyungmin.lavanderia.order.data.dto.OrderDTO.OrderInsert;

public interface OrderService {
    void insertOrder(String memberId, OrderInsert orderDTO);
}
