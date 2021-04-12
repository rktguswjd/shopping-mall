package com.project.shoppingmall.controller.requestdto.member;

import lombok.Data;

@Data
public class RequestMemberSignUpDto {
    private String name;
    private String email;
    private String password;
    private String phone;
    private String location;
}
