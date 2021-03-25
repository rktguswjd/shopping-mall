package com.project.shoppingmall.exception;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class DuplicationIdException extends RuntimeException {
    public DuplicationIdException(String email) {
        log.error(email+"은 이미 존재하는 ID입니다");
    }
}
