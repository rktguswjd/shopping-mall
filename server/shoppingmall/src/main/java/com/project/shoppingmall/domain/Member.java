package com.project.shoppingmall.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter
@Table(name = "members")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String phone;

//    @Enumerated(EnumType.STRING)
//    private Role role;
}
