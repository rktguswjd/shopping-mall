import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "./register.module.css";
import { registerRequestAction } from "../../reducers/user";

const Register = ({ history }) => {
    console.log(history);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const dispatch = useDispatch();

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (password !== passwordCheck) {
                console.log("비밀번호 다름");
                return;
            }
            let data = {
                email,
                password,
                name,
                phone,
                address,
            };

            dispatch(registerRequestAction(data));
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
                    />
                </div>
                <div className={styled.form_item}>
                    <input
                        type="text"
                        placeholder="이름을 입력하세요."
                        onChange={onChangeName}
                    />
                </div>
                <div className={styled.form_item}>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        onChange={onChangePassword}
                    />
                </div>
                <div className={styled.form_item}>
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        onChange={onChangePasswordCheck}
                    />
                </div>
                <div className={styled.form_item}>
                    <input
                        type="text"
                        placeholder="연락처를 입력하세요."
                        onChange={onChangePhone}
                    />
                </div>
                <div className={styled.form_item}>
                    <input
                        type="text"
                        placeholder="주소를 입력하세요."
                        onChange={onChangeAddress}
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
