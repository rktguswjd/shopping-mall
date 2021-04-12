package com.project.shoppingmall.service.impl;

import com.project.shoppingmall.controller.requestdto.category.RequestCategoryEnrollInfo;
import com.project.shoppingmall.domain.Category;
import com.project.shoppingmall.exception.DuplicationCategoryNameException;
import com.project.shoppingmall.repository.CategoryRepository;
import com.project.shoppingmall.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AdminServiceImpl implements AdminService {
    private final CategoryRepository categoryRepository;

    @Transactional
    public void enrollCategory(RequestCategoryEnrollInfo enrollInfo) {
        if(isDuplicatedCategory(enrollInfo.getName()))throw new DuplicationCategoryNameException(enrollInfo.getName());
        Category enrollCategory = Category.enrollCategory(enrollInfo);
        categoryRepository.save(enrollCategory);
    }

    public boolean isDuplicatedCategory(String name) {
        return categoryRepository.countByName(name)==1;
    }
}
