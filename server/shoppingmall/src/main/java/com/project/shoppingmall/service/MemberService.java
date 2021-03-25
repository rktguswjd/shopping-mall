package com.project.shoppingmall.service;

import com.project.shoppingmall.controller.dto.MemberDto;
import com.project.shoppingmall.domain.Member;
import org.springframework.stereotype.Service;

public interface MemberService {
    void register(MemberDto memberDto);

    Member login(String email, String password);

    boolean isDuplicatedEmail(String email);
}
