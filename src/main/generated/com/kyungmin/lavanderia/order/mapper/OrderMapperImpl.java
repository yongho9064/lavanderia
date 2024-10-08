package com.kyungmin.lavanderia.order.mapper;

import com.kyungmin.lavanderia.order.data.dto.OrderDTO;
import com.kyungmin.lavanderia.order.data.dto.OrderDetailDTO;
import com.kyungmin.lavanderia.order.data.entity.Order;
import com.kyungmin.lavanderia.order.data.entity.OrderDetail;
import com.kyungmin.lavanderia.product.data.entity.Product;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-10-07T03:08:22+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 21.0.4 (Amazon.com Inc.)"
)
public class OrderMapperImpl implements OrderMapper {

    @Override
    public Order toEntity(String memberId, OrderDTO.OrderInsert orderDTO) {
        if ( memberId == null && orderDTO == null ) {
            return null;
        }

        Order.OrderBuilder order = Order.builder();

        if ( orderDTO != null ) {
            order.rcvrName( orderDTO.getRcvrName() );
            order.rcvrPhone( orderDTO.getRcvrPhone() );
            order.rcvrAddress( orderDTO.getRcvrAddress() );
            order.rcvrDetailAddress( orderDTO.getRcvrDetailAddress() );
            order.rcvrPostalCode( orderDTO.getRcvrPostalCode() );
            order.dlvrReqMessage( orderDTO.getDlvrReqMessage() );
            order.orderDetailList( orderDetailInsertListToOrderDetailList( orderDTO.getOrderDetailList() ) );
        }
        order.memberId( memberId );

        return order.build();
    }

    @Override
    public Product map(UUID productId) {
        if ( productId == null ) {
            return null;
        }

        Product.ProductBuilder product = Product.builder();

        product.productId( productId );

        return product.build();
    }

    protected OrderDetail orderDetailInsertToOrderDetail(OrderDetailDTO.OrderDetailInsert orderDetailInsert) {
        if ( orderDetailInsert == null ) {
            return null;
        }

        OrderDetail.OrderDetailBuilder orderDetail = OrderDetail.builder();

        orderDetail.productId( map( orderDetailInsert.getProductId() ) );
        orderDetail.quantity( orderDetailInsert.getQuantity() );
        orderDetail.price( orderDetailInsert.getPrice() );

        return orderDetail.build();
    }

    protected List<OrderDetail> orderDetailInsertListToOrderDetailList(List<OrderDetailDTO.OrderDetailInsert> list) {
        if ( list == null ) {
            return null;
        }

        List<OrderDetail> list1 = new ArrayList<OrderDetail>( list.size() );
        for ( OrderDetailDTO.OrderDetailInsert orderDetailInsert : list ) {
            list1.add( orderDetailInsertToOrderDetail( orderDetailInsert ) );
        }

        return list1;
    }
}
