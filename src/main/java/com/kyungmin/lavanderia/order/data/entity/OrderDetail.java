package com.kyungmin.lavanderia.order.data.entity;

import com.kyungmin.lavanderia.product.data.entity.Product;
import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "TBL_ORDER_DETAIL")
public class OrderDetail {

    @Id
    @Column(name = "ORDER_DETAIL_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderDetailId;

    @ManyToOne
    @JoinColumn(name = "ORDER_ID")
    private Order orderId;

    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID")
    private Product productId;

    @Column(name = "QUANTITY")
    private int quantity;

    @Column(name = "PRICE")
    private int price;

}