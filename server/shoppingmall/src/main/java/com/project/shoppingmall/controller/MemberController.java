package com.project.shoppingmall.controller;

import com.project.shoppingmall.controller.requestdto.RequestMemberSignInDto;
import com.project.shoppingmall.controller.requestdto.RequestMemberSignUpDto;
import com.project.shoppingmall.controller.responsedto.ResponseMyInfo;
import com.project.shoppingmall.controller.responsedto.ResponseSignIn;
import com.project.shoppingmall.domain.Member;
import com.project.shoppingmall.security.JwtTokenProvider;
import com.project.shoppingmall.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    private static final ResponseEntity<ResponseSignIn> FAIL_RESPONSE = new ResponseEntity<ResponseSignIn>(HttpStatus.BAD_REQUEST);

    @CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
    @PostMapping("/signIn")
    public ResponseEntity<ResponseSignIn> signIn(@RequestBody RequestMemberSignInDto requestMemberSignInDto){
        Optional<Member> result = memberService.login(requestMemberSignInDto.getEmail(), requestMemberSignInDto.getPassword());
        if(result.isEmpty()) return FAIL_RESPONSE;
        return ResponseEntity.ok()
                .header("X-AUTH-TOKEN",jwtTokenProvider.createToken(result.get().getUsername(), result.get().getRole().name()))
                .body(ResponseSignIn.success());
    }

    @PostMapping("/signUp")
    public ResponseEntity signUp(@RequestBody RequestMemberSignUpDto requestMemberSignUpDto){
        memberService.register(requestMemberSignUpDto);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/myInfo")
    public ResponseEntity<String> myInfo(@RequestHeader("X-AUTH-TOKEN") String token){
        return ResponseEntity.ok().body(token);
    }


}
