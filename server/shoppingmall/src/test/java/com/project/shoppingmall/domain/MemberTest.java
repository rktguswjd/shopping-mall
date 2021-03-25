package com.project.shoppingmall.domain;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class MemberTest {

    @Autowired
    EntityManager em;

    @Test
    void 회원생성() {
        Member member = Member.builder()
                .name("최원석")
                .email("wonsok@naver.com")
                .password("1234")
                .phone("01041105893")
                .location("노원구")
                .build();
        em.persist(member);
    }
}