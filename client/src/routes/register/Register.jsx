import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "./register.module.css";
import { registerRequestAction } from "../../reducers/user";
import { Alert, message } from "antd";

const Register = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const dispatch = useDispatch();

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();

            if (password !== passwordCheck) {
                return setPasswordError(true);
            }
            dispatch(
                registerRequestAction({ email, password, name, phone, address })
            );
            history.push("/login");
        },
        [email, password, passwordCheck, name, phone, address]
    );

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
    }, []);

    const onChangePhone = useCallback((e) => {
        setPhone(e.target.value);
    }, []);

    const onChangeAddress = useCallback((e) => {
        setAddress(e.target.value);
    });

    return (
        <>
            <div className={styled.page_name}>SIGN-UP</div>
            <form onSubmit={onSubmit} className={styled.form}>
                <div className={styled.form_item}>
                    <input
                        type="email"
                        placeholder="e-mail을 입력하세요."
                        onChange={onChangeEmail}
                        required
                    />
                </div>
                <div className={styled.form_item}>
                    <input
                        type="text"
                        placeholder="이름을 입력하세요."
                        onChange={onChangeName}
                        required
                    />
                </div>
                <div className={styled.form_item}>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        onChange={onChangePassword}
                        required
                    />
                </div>
                <div className={styled.form_item}>
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        onChange={onChangePasswordCheck}
                        required
                    />
                </div>
                {passwordError && (
                    <div style={{ color: "red" }}>
                        비밀번호가 일치하지 않습니다.
                    </div>
                )}
                <div className={styled.form_item}>
                    <input
                        type="text"
                        placeholder="-없이 연락처를 입력하세요."
                        onChange={onChangePhone}
                        required
                    />
                </div>
                <div className={styled.form_item}>
                    <input
                        type="text"
                        placeholder="주소를 입력하세요."
                        onChange={onChangeAddress}
                        required
                    />
                </div>
                <div className={styled.form_item}>
                    <button className={styled.register_btn}>REGISTER</button>
                </div>
            </form>

            <div className={styled.transform_text}>
                이미 계정이 있나요?
                <Link to="/login" className={styled.transform}>
                    LOG IN
                </Link>
            </div>
        </>
    );
};

export default Register;

// const mapStateToProps = (state) => {
//     return { user: state };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signUp: (data) => dispatch(actionCreators.signUp(data)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
