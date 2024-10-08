package com.kyungmin.lavanderia.product.data.mapper;

import com.kyungmin.lavanderia.product.data.dto.ProductDTO;
import com.kyungmin.lavanderia.product.data.entity.Product;
import com.kyungmin.lavanderia.product.data.entity.ProductImgUrl;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-10-05T14:23:48+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 21.0.4 (Amazon.com Inc.)"
)
public class ProductMapperImpl implements ProductMapper {

    @Override
    public Product toEntity(ProductDTO productDTO) {
        if ( productDTO == null ) {
            return null;
        }

        Product.ProductBuilder product = Product.builder();

        product.productName( productDTO.getProductName() );
        product.productPrice( productDTO.getProductPrice() );
        product.productDescription( productDTO.getProductDescription() );

        return product.build();
    }

    @Override
    public ProductImgUrl toEntity(String productImgUrl, Product product) {
        if ( productImgUrl == null && product == null ) {
            return null;
        }

        ProductImgUrl.ProductImgUrlBuilder productImgUrl1 = ProductImgUrl.builder();

        productImgUrl1.productImgUrl( productImgUrl );
        productImgUrl1.productId( product );

        return productImgUrl1.build();
    }
}
