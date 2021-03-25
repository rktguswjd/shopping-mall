package com.project.shoppingmall.controller.dto;

import lombok.Data;

@Data
public class MemberDto {
    private String name;
    private String email;
    private String password;
    private String phone;
    private String location;
}
