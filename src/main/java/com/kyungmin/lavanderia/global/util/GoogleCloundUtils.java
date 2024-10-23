package com.kyungmin.lavanderia.global.util;

import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
public class GoogleCloundUtils {

    private static String bucketName;

    private static Storage storage;

    @Autowired
    public GoogleCloundUtils(Storage storage, @Value("${spring.cloud.bucket}") String bucketName) {
        this.storage = storage;
        this.bucketName = bucketName;
    }

    public static String uploadSingleFile(MultipartFile imgFile) throws IOException {
        String uuid = UUID.randomUUID().toString();
        String ext = imgFile.getOriginalFilename() != null ?
                FilenameUtils.getExtension(imgFile.getOriginalFilename()) : "jpg"; // 파일 확장자 가져오기

        // Cloud에 이미지 업로드
        BlobInfo blobInfo = storage.create(
                BlobInfo.newBuilder(bucketName, uuid + "." + ext) // UUID 뒤에 확장자 추가
                        .setContentType(imgFile.getContentType())
                        .build(),
                imgFile.getInputStream()
        );

        return blobInfo.getMediaLink();

    }

    public static List<String> uploadListFile(List<MultipartFile> imgFiles) throws IOException {

        List<String> imageUrls = new ArrayList<>();

        for(MultipartFile file : imgFiles) {
            imageUrls.add(uploadSingleFile(file));
        }

        return imageUrls;
    }

}
