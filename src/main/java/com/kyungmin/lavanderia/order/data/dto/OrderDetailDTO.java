package com.kyungmin.lavanderia.order.data.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class OrderDetailDTO {

    @Data
    @Builder
    public static class OrderDetailInsert {

        @Schema(description = "주문 ID", example = "1")
        private Long orderId;

        @Schema(description = "상품 ID", example = "b3c9e0a8-7b4b-4a7b-bd9a-4a84f43c2b08")
        private UUID productId;

        @Schema(description = "수량", example = "2")
        private int quantity;

        @Schema(description = "가격", example = "10000")
        private Long price;
    }
}
