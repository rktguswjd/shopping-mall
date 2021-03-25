package com.project.shoppingmall.service.impl;

import com.project.shoppingmall.controller.dto.MemberDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class MemberServiceImplTest {

    @Autowired
    MemberServiceImpl memberService;

    @Test
    void register() {
        MemberDto memberDto = new MemberDto();
        memberDto.setEmail("wonseok");
        memberDto.setName("최원석");
        memberDto.setPassword("1234");
        memberDto.setPhone("0104123");
        memberDto.setLocation("노원구");
        memberService.register(memberDto);
    }
}