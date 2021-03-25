package com.project.shoppingmall.repository;

import com.project.shoppingmall.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Long> {
    int countByEmail(String email);

    Optional<Member> findByEmail(String email);
}
