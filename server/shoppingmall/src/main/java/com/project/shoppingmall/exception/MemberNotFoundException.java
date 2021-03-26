package com.project.shoppingmall.exception;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MemberNotFoundException extends RuntimeException {
    public MemberNotFoundException(String email) {
        super("email: "+email+"인 사용자가 없습니다. -> ID 또는 PW가 일치 하지 않습니다로 수정 할거");
    }
}
