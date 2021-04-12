package com.project.shoppingmall.exception;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class DuplicationCategoryNameException extends RuntimeException {
    public DuplicationCategoryNameException(String name) {
        super(name+"카테고리는 이미 존재합니다.");
        log.error(name+"카테고리는 이미 존재합니다.");
    }
}
