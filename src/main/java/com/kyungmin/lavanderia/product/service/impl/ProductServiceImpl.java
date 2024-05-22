package com.kyungmin.lavanderia.product.service.impl;

import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.kyungmin.lavanderia.product.data.ProductRepository;
import com.kyungmin.lavanderia.product.data.dto.ProductDTO;
import com.kyungmin.lavanderia.product.data.entity.Product;
import com.kyungmin.lavanderia.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    @Value("${spring.cloud.bucket}") // application.yml에 써둔 bucket 이름
    private String bucketName;

    private final Storage storage;

    private final ProductRepository productRepository;

    @Override
    public void updateProductInfo(ProductDTO productDTO) throws IOException {
        // !!!!!!!!!!!이미지 업로드 관련 부분!!!!!!!!!!!!!!!
        String uuid = UUID.randomUUID().toString(); // Google Cloud Storage에 저장될 파일 이름
        String ext = productDTO.getProductImage().getContentType(); // 파일의 형식 ex) JPG

        // Cloud에 이미지 업로드
        BlobInfo blobInfo = storage.create(
                BlobInfo.newBuilder(bucketName, uuid)
                        .setContentType(ext)
                        .build(),
                productDTO.getProductImage().getInputStream()
        );

        // Product 객체 생성
        Product product = Product.builder()
                .productName(productDTO.getProductName())
                .productPrice(productDTO.getProductPrice())
                .productDescription(productDTO.getProductDescription())
                .productImage(blobInfo.getMediaLink())
                .build();

        productRepository.save(product);
    }
}
