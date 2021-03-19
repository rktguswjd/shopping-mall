import React from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
    return (
        <>
            <h1>회원가입</h1>
            <h3>Have an Account?</h3>
            <Link to="/login">
                <h3>로그인</h3>
            </Link>
        </>
    );
};

export default Register;
