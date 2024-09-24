package com.kyungmin.lavanderia.order.data.entity;

import com.kyungmin.lavanderia.product.data.entity.Product;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@IdClass(OrderDetail.OrderDetailId.class)
@Table(name = "TBL_ORDER_DETAIL")
public class OrderDetail {

    @Id
    @ManyToOne
    @JoinColumn(name = "ORDER_ID")
    private Order orderId;

    @Id
    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID")
    private Product productId;

    @Column(name = "QUANTITY")
    private int quantity;

    @Column(name = "PRICE")
    private Long price;

    // 복합 키를 위한 내부 static 클래스
    @Data
    public static class OrderDetailId implements Serializable {
        private Long orderId;
        private UUID productId;
    }
}