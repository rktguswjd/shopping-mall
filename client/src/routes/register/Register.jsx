import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "./register.module.css";
import { registerRequestAction } from "../../reducers/user";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = ({ history }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const { registerLoading } = useSelector((state) => state.user);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();

            if (password !== passwordCheck) {
                return setPasswordError(true);
            }
            dispatch(
                registerRequestAction({
                    email,
                    password,
                    name,
                    phone,
                    location,
                })
            );
            history.push("/login");
        },
        [email, password, passwordCheck, name, phone, location]
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

    const onChangeLocation = useCallback((e) => {
        setLocation(e.target.value);
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
                        onChange={onChangeLocation}
                        required
                    />
                </div>
                <div className={styled.form_item}>
                    <button className={styled.register_btn}>
                        {registerLoading ? (
                            <div className="fa-2x">
                                <FontAwesomeIcon icon={faSpinner} pulse />
                            </div>
                        ) : (
                            "REGISTER"
                        )}
                    </button>
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
