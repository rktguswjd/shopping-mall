import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginRequestAction } from "../reducers/user";
import styled from "./login.module.css";

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

            dispatch(loginRequestAction(email, password));
            setIsLoggedIn(true);
            console.log(email, password);
        },
        [email, password]
    );
    return (
        <>
            <div className={styled.page_name}>LOG-IN</div>
            <form onSubmit={onSubmit} className={styled.form}>
                <div className={styled.form_item}>
                    <input
                        type="email"
                        placeholder="e-mail"
                        onChange={onChangeEmail}
                    />
                </div>
                <div className={styled.form_item}>
                    <input
                        type="password"
                        placeholder="password"
                        onChange={onChangePassword}
                    />
                </div>
                <div className={styled.form_item}>
                    <button className={styled.login_btn}>CONNECT!</button>
                </div>
            </form>
            <div className={styled.transform_text}>
                아직 계정이 없나요?{" "}
                <Link to="/register" className={styled.transform}>
                    JOIN US
                </Link>
            </div>
        </>
    );
};

export default LogIn;
