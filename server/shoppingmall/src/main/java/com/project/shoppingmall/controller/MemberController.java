package com.project.shoppingmall.controller;

import com.project.shoppingmall.controller.requestdto.RequestMemberSignInDto;
import com.project.shoppingmall.controller.requestdto.RequestMemberSignUpDto;
import com.project.shoppingmall.controller.responsedto.ResponseMyInfo;
import com.project.shoppingmall.controller.responsedto.ResponseSignIn;
import com.project.shoppingmall.domain.Member;
import com.project.shoppingmall.security.JwtTokenProvider;
import com.project.shoppingmall.service.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@Api(value = "회원 V1")
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    private static final ResponseEntity<ResponseSignIn> FAIL_RESPONSE = new ResponseEntity<ResponseSignIn>(HttpStatus.BAD_REQUEST);

    @ApiOperation(value = "로그인", notes = "회원/관리자 로그인")
    @PostMapping("signIn")
    public ResponseEntity<ResponseSignIn> signIn(@RequestBody RequestMemberSignInDto requestMemberSignInDto) {
        Optional<Member> result = memberService.login(requestMemberSignInDto.getEmail(), requestMemberSignInDto.getPassword());
        if (result.isEmpty()) return FAIL_RESPONSE;
        return ResponseEntity.ok()
                .header("X-AUTH-TOKEN", jwtTokenProvider.createToken(result.get().getUsername(), result.get().getRole().name()))
                .body(ResponseSignIn.success());
    }

    @ApiOperation(value = "회원가입", notes = "")
    @PostMapping("signUp")
    public ResponseEntity signUp(@RequestBody RequestMemberSignUpDto requestMemberSignUpDto) {
        memberService.register(requestMemberSignUpDto);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("myInfo")
    public ResponseEntity<String> myInfo(@RequestHeader("X-AUTH-TOKEN") String token) {
        return ResponseEntity.ok().body(token);
    }

    @GetMapping("auth")
    Authentication authentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

}
