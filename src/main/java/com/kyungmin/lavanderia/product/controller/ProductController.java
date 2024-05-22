package com.kyungmin.lavanderia.product.controller;

import com.kyungmin.lavanderia.product.data.dto.ProductDTO;
import com.kyungmin.lavanderia.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping("/update")
    public ResponseEntity<Void> updateProductInfo(ProductDTO productDTO) throws IOException {

        productService.updateProductInfo(productDTO);

        return new ResponseEntity(HttpStatus.OK);
    }
}
