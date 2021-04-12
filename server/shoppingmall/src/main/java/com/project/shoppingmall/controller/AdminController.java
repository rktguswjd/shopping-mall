package com.project.shoppingmall.controller;

import com.project.shoppingmall.controller.requestdto.category.RequestCategoryEnrollInfo;
import com.project.shoppingmall.service.AdminService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@Api(value = "관리자 카테고리")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @ApiOperation(value = "카테고리 등록")
    @PostMapping("category")
    public ResponseEntity enrollCategory(@RequestBody RequestCategoryEnrollInfo enrollInfo) {
        adminService.enrollCategory(enrollInfo);
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
