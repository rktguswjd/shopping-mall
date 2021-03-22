import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };
    return (
        <>
            <h1>로그인</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="e-mail" />
                <input type="password" placeholder="password" />
                <button>로그인</button>
            </form>
            아직 계정이 없나요? <Link to="/register">가입하기</Link>
        </>
    );
};

export default Login;
