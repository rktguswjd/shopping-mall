import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../reducers/user";

const LogIn = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();

            dispatch(actionCreators.login({ email, password }));
            setIsLoggedIn(true);
            console.log(email, password);
        },
        [email, password]
    );
    return (
        <>
            <h1>로그인</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    placeholder="e-mail"
                    onChange={onChangeEmail}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={onChangePassword}
                />
                <button>로그인</button>
            </form>
            아직 계정이 없나요? <Link to="/register">가입하기</Link>
        </>
    );
};

export default LogIn;
