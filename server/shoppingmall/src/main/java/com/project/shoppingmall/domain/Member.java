package com.project.shoppingmall.domain;

import com.project.shoppingmall.controller.dto.MemberDto;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "members")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String phone;
    private String location;
    
    @Enumerated(EnumType.STRING)
    private Role role;


    public enum Role{
        CLIENT, ADMIN, DELETED
    }


    /**
     *
     * @param memberDto 회원가입 정보
     * @return 회원
     */
    public static Member register(MemberDto memberDto) {
        return Member.builder()
                .name(memberDto.getName())
                .email(memberDto.getEmail())
                .password(memberDto.getPassword())
                .phone(memberDto.getPassword())
                .location(memberDto.getLocation())
                .role(Role.CLIENT)
                .build();
    }

}
