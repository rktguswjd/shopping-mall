package com.project.shoppingmall.repository;

import com.project.shoppingmall.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category,Integer> {
    int countByName(String name);

    Optional<Category> findByName(String name);
}
