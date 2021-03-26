package com.project.shoppingmall.controller.responsedto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ResponseSignIn {

    enum LoginStatus{
        SUCCESS,FAIL,DELETED
    }

    private LoginStatus loginStatus;

    public static ResponseSignIn fail(){
        return new ResponseSignIn(LoginStatus.FAIL);
    }

    public static ResponseSignIn success(){
        return new ResponseSignIn(LoginStatus.SUCCESS);
    }

}
