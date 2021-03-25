package com.project.shoppingmall.service.impl;

import com.project.shoppingmall.controller.dto.MemberDto;
import com.project.shoppingmall.domain.Member;
import com.project.shoppingmall.exception.DuplicationEmailException;
import com.project.shoppingmall.repository.MemberRepository;
import com.project.shoppingmall.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    @Transactional
    public void register(MemberDto memberDto) {
        if (isDuplicatedEmail(memberDto.getEmail())) throw new DuplicationEmailException(memberDto.getEmail());
        Member createdMember = Member.register(memberDto);
        memberRepository.save(createdMember);
    }

    @Transactional
    public Optional<Member> login(String email, String password) {
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new NoSuchElementException(email));
        if(member.getPassword().equals(password)) return Optional.of(member);
        return Optional.empty();
    }

    public boolean isDuplicatedEmail(String email) {
        return memberRepository.countByEmail(email) == 1;
    }
}
