package com.project.shoppingmall.controller.responsedto.common;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CommonResult {
    private boolean success;
    private int code;
    private String msg;

    public static CommonResult getFailResult(String msg) {
        return new CommonResult(false, -1, msg);
    }
    public static CommonResult getSuccessResult(String msg) {
        return new CommonResult(true, 1, msg);
    }
}
