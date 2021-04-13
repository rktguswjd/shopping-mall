package com.project.shoppingmall.exception;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class NotCategoryExistException extends RuntimeException {
    public NotCategoryExistException(int categoryId) {
        super(categoryId+"는 없는 카테고리 입니다");
        log.error(categoryId+"는 없는 카테고리 입니다");
    }
}
