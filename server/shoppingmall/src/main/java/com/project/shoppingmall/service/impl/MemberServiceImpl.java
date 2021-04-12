package com.project.shoppingmall.service.impl;

import com.project.shoppingmall.controller.requestdto.member.RequestMemberSignUpDto;
import com.project.shoppingmall.domain.Member;
import com.project.shoppingmall.exception.DuplicationEmailException;
import com.project.shoppingmall.exception.MemberNotFoundException;
import com.project.shoppingmall.repository.MemberRepository;
import com.project.shoppingmall.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberServiceImpl implements MemberService, UserDetailsService {

    private final MemberRepository memberRepository;

    @Transactional
    public void register(RequestMemberSignUpDto requestMemberSignUpDto) {
        if (isDuplicatedEmail(requestMemberSignUpDto.getEmail())) throw new DuplicationEmailException(requestMemberSignUpDto.getEmail());
        Member createdMember = Member.register(requestMemberSignUpDto);
        memberRepository.save(createdMember);
    }

    @Transactional
    public Optional<Member> login(String email, String password) {
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new MemberNotFoundException(email));
        if(member.getPassword().equals(password)) return Optional.of(member);
        return Optional.empty();
    }

    public boolean isDuplicatedEmail(String email) {
        return memberRepository.countByEmail(email) == 1;
    }


    //---------------Security 권한 인증
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println(username);
        return memberRepository.findByEmail(username).orElseThrow(()->new MemberNotFoundException(username));
    }
}
