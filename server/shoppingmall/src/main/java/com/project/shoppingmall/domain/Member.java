package com.project.shoppingmall.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter @Setter
@Builder
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
}
