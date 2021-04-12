package com.project.shoppingmall.domain;

import com.project.shoppingmall.controller.requestdto.RequestMemberSignUpDto;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Entity
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "members")
public class Member implements UserDetails {

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

    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL)
    List<Product> myProducts = new ArrayList<>();

    public enum Role{
        ROLE_CLIENT, ROLE_ADMIN, DELETED
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority(this.getRole().name()));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    /**
     *
     * @param requestMemberSignUpDto 회원가입 정보
     * @return 회원
     */
    public static Member register(RequestMemberSignUpDto requestMemberSignUpDto) {
        return Member.builder()
                .name(requestMemberSignUpDto.getName())
                .email(requestMemberSignUpDto.getEmail())
                .password(requestMemberSignUpDto.getPassword())
                .phone(requestMemberSignUpDto.getPassword())
                .location(requestMemberSignUpDto.getLocation())
                .role(Role.ROLE_CLIENT)
                .build();
    }

}
