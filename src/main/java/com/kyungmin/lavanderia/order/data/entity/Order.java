package com.kyungmin.lavanderia.order.data.entity;

import com.kyungmin.lavanderia.product.data.entity.Product;
import jakarta.persistence.*;
import jdk.jfr.Timestamp;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.CurrentTimestamp;

import java.util.Date;

@Entity
@Table(name = "TBL_ORDER")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ORDER_ID")
    private Long orderId;

    @Column(name = "ORDER_DATE")
    @CurrentTimestamp
    private Date orderDate;

    @Column(name = "PRICE")
    private Long price;

    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID")
    private Product product;
}
