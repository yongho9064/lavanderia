package com.kyungmin.lavanderia.product.service.impl;

import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.kyungmin.lavanderia.product.data.dto.ProductDTO;
import com.kyungmin.lavanderia.product.data.entity.Product;
import com.kyungmin.lavanderia.product.data.entity.ProductImgUrl;
import com.kyungmin.lavanderia.product.data.mapper.ProductMapper;
import com.kyungmin.lavanderia.product.data.repository.ProductImgUrlRepository;
import com.kyungmin.lavanderia.product.data.repository.ProductRepository;
import com.kyungmin.lavanderia.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    @Value("${spring.cloud.bucket}") // application.yml에 써둔 bucket 이름
    private String bucketName;

    private final Storage storage;

    private final ProductRepository productRepository;
    private final ProductImgUrlRepository productImgUrlRepository;

    @Override
    public void insertProduct(ProductDTO productDTO) throws IOException {

        List<String> imageUrls = new ArrayList<>();

        // !!!!!!!!!!!이미지 업로드 관련 부분!!!!!!!!!!!!!!!
        for(MultipartFile file : productDTO.getProductImage()) {
            String uuid = UUID.randomUUID().toString(); // Google Cloud Storage에 저장될 파일 이름
            String ext = file.getContentType(); // 파일의 형식 ex) JPG

            // Cloud에 이미지 업로드
            BlobInfo blobInfo = storage.create(
                    BlobInfo.newBuilder(bucketName, uuid)
                            .setContentType(ext)
                            .build(),
                    file.getInputStream()
            );
            imageUrls.add(blobInfo.getMediaLink());

        }

        Product product = ProductMapper.INSTANCE.toEntity(productDTO);

        productRepository.save(product);

        for(String productImageUrl : imageUrls) {
            ProductImgUrl productImgUrl = ProductMapper.INSTANCE.toEntity(productImageUrl, product);
            productImgUrlRepository.save(productImgUrl);
        }

    }
}