package com.kyungmin.lavanderia.order.service.impl;

import com.kyungmin.lavanderia.order.data.dto.OrderDTO.OrderInsert;
import com.kyungmin.lavanderia.order.data.entity.Order;
import com.kyungmin.lavanderia.order.data.repository.OrderDetailRepository;
import com.kyungmin.lavanderia.order.data.repository.OrderRepository;
import com.kyungmin.lavanderia.order.mapper.OrderMapper;
import com.kyungmin.lavanderia.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final OrderDetailRepository orderDetailRepository;

    @Override
    public void insertOrder(String memberId, OrderInsert orderDTO) {

        Order order = OrderMapper.INSTANCE.toEntity(memberId, orderDTO);

        orderRepository.save(order);
        orderDetailRepository.saveAll(order.getOrderDetailList());

    }
}
