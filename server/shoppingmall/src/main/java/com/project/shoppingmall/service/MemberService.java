package com.project.shoppingmall.service;

import com.project.shoppingmall.controller.requestdto.member.RequestMemberSignUpDto;
import com.project.shoppingmall.domain.Member;

import java.util.Optional;

public interface MemberService {
    void register(RequestMemberSignUpDto requestMemberSignUpDto);

    Optional<Member> login(String email, String password);

    boolean isDuplicatedEmail(String email);
}
