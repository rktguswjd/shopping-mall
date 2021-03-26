package com.project.shoppingmall.service.impl;

import com.project.shoppingmall.controller.requestdto.RequestMemberSignUpDto;
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
        RequestMemberSignUpDto requestMemberSignUpDto = new RequestMemberSignUpDto();
        requestMemberSignUpDto.setEmail("wonseok");
        requestMemberSignUpDto.setName("최원석");
        requestMemberSignUpDto.setPassword("1234");
        requestMemberSignUpDto.setPhone("0104123");
        requestMemberSignUpDto.setLocation("노원구");
        memberService.register(requestMemberSignUpDto);
    }

    @Test
    void 이미존재하는이메일로회원가입() {
        RequestMemberSignUpDto requestMemberSignUpDto = new RequestMemberSignUpDto();
        requestMemberSignUpDto.setEmail("wonseok");
        requestMemberSignUpDto.setName("최원석");
        requestMemberSignUpDto.setPassword("1234");
        requestMemberSignUpDto.setPhone("0104123");
        requestMemberSignUpDto.setLocation("노원구");
        assertThrows(DuplicationEmailException.class, () -> {
            memberService.register(requestMemberSignUpDto);
            memberService.register(requestMemberSignUpDto);
        });
    }

    @Test
    void 로그인성공() {
        RequestMemberSignUpDto requestMemberSignUpDto = new RequestMemberSignUpDto();
        requestMemberSignUpDto.setEmail("wonseok");
        requestMemberSignUpDto.setName("최원석");
        requestMemberSignUpDto.setPassword("1234");
        requestMemberSignUpDto.setPhone("0104123");
        requestMemberSignUpDto.setLocation("노원구");
        memberService.register(requestMemberSignUpDto);
        assertNotNull(memberService.login("wonseok", "1234").get());
    }
    @Test
    void 로그인실패() {
        RequestMemberSignUpDto requestMemberSignUpDto = new RequestMemberSignUpDto();
        requestMemberSignUpDto.setEmail("wonseok");
        requestMemberSignUpDto.setName("최원석");
        requestMemberSignUpDto.setPassword("12344");
        requestMemberSignUpDto.setPhone("0104123");
        requestMemberSignUpDto.setLocation("노원구");
        memberService.register(requestMemberSignUpDto);
        assertTrue(memberService.login("wonseok", "1234").isEmpty());
    }
}