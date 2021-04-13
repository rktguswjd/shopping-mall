package com.project.shoppingmall.service;

import com.project.shoppingmall.controller.requestdto.product.RequestProductEnrollInfo;
import com.project.shoppingmall.domain.Member;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {
    void enrollProduct(RequestProductEnrollInfo enrollInfo, Member admin, List<MultipartFile> files);

}
