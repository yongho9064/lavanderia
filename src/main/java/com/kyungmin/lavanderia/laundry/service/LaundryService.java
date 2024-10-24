package com.kyungmin.lavanderia.laundry.service;

import com.kyungmin.lavanderia.laundry.data.dto.LaundryDto.LaundryInsert;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface LaundryService {

    void addLaundra(List<LaundryInsert> laundryInserts, List<MultipartFile> laundryImages) throws IOException;
}
