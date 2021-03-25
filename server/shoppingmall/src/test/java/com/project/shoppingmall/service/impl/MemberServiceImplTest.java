package com.project.shoppingmall.service.impl;

import com.project.shoppingmall.controller.dto.MemberDto;
import com.project.shoppingmall.exception.DuplicationEmailException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class MemberServiceImplTest {

    @Autowired
    MemberServiceImpl memberService;

    @Test
    void 회원가입() {
        MemberDto memberDto = new MemberDto();
        memberDto.setEmail("wonseok");
        memberDto.setName("최원석");
        memberDto.setPassword("1234");
        memberDto.setPhone("0104123");
        memberDto.setLocation("노원구");
        memberService.register(memberDto);
    }

    @Test
    void 이미존재하는이메일로회원가입() {
        MemberDto memberDto = new MemberDto();
        memberDto.setEmail("wonseok");
        memberDto.setName("최원석");
        memberDto.setPassword("1234");
        memberDto.setPhone("0104123");
        memberDto.setLocation("노원구");
        assertThrows(DuplicationEmailException.class, () -> {
            memberService.register(memberDto);
            memberService.register(memberDto);
        });
    }

    @Test
    void 로그인성공() {
        MemberDto memberDto = new MemberDto();
        memberDto.setEmail("wonseok");
        memberDto.setName("최원석");
        memberDto.setPassword("1234");
        memberDto.setPhone("0104123");
        memberDto.setLocation("노원구");
        memberService.register(memberDto);
        assertNotNull(memberService.login("wonseok", "1234").get());
    }
    @Test
    void 로그인실패() {
        MemberDto memberDto = new MemberDto();
        memberDto.setEmail("wonseok");
        memberDto.setName("최원석");
        memberDto.setPassword("12344");
        memberDto.setPhone("0104123");
        memberDto.setLocation("노원구");
        memberService.register(memberDto);
        assertTrue(memberService.login("wonseok", "1234").isEmpty());
    }
}