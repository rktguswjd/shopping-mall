import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "../reducers/user";

const Register = ({ history }) => {
    console.log(history);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const dispatch = useDispatch();

    const onSubmit = (e) => {
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
        dispatch(actionCreators.register(data));
        history.push("/login");
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordCheck = (e) => {
        setPasswordCheck(e.target.value);
    };

    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    };

    return (
        <>
            <h1>회원가입</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    placeholder="e-mail을 입력하세요."
                    onChange={onChangeEmail}
                />
                <input
                    type="text"
                    placeholder="이름을 입력하세요."
                    onChange={onChangeName}
                />
                <input
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    onChange={onChangePassword}
                />
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    onChange={onChangePasswordCheck}
                />
                <input
                    type="text"
                    placeholder="연락처를 입력하세요."
                    onChange={onChangePhone}
                />
                <input
                    type="text"
                    placeholder="주소를 입력하세요."
                    onChange={onChangeAddress}
                />
                <button>가입하기</button>
            </form>
            이미 계정이 있나요?
            <Link to="/login">로그인</Link>
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
