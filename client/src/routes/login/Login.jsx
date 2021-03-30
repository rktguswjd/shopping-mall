import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginRequestAction } from "../../reducers/user";

import styled from "./login.module.css";

const LogIn = ({ history }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logInLoading } = useSelector((state) => state.user);

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(loginRequestAction({ email, password }));
            history.push("/");
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
                        required
                    />
                </div>
                <div className={styled.form_item}>
                    <input
                        type="password"
                        placeholder="password"
                        onChange={onChangePassword}
                        required
                    />
                </div>
                <div className={styled.form_item}>
                    <button className={styled.login_btn}>CONNECT</button>
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
