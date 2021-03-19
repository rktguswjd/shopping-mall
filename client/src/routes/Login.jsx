import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <>
            <h1>로그인</h1>
            <h3>New Customer?</h3>
            <Link to="/register">
                <h3>가입하기</h3>
            </Link>
        </>
    );
};

export default Login;
