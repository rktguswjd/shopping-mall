package com.project.shoppingmall.service.impl;

import com.project.shoppingmall.controller.dto.MemberDto;
import com.project.shoppingmall.domain.Member;
import com.project.shoppingmall.exception.DuplicationIdException;
import com.project.shoppingmall.repository.MemberRepository;
import com.project.shoppingmall.service.MemberService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Transactional
    public void register(MemberDto memberDto) {
        if (isDuplicatedId(memberDto.getEmail())) throw new DuplicationIdException(memberDto.getEmail());
        Member createdMember = Member.register(memberDto);
        memberRepository.save(createdMember);
    }

    @Transactional
    public Member login(String id, String password) {
        return null;
    }

    public boolean isDuplicatedId(String id) {
        return false;
    }
}
