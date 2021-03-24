const LOG_IN = "LOG_IN";
const REGISTER = "REGISTER";

const register = (data) => {
    // 회원가입 요청시 받아온 응답 저장할 data
    return { type: REGISTER, payload: data };
};

const login = (data) => {
    // 로그인 요청시 받아온 응답 저장할 data
    return { type: LOG_IN, payload: data };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case REGISTER:
            return { ...state, registerSuccess: action.payload };

        case LOG_IN:
            return { ...state, loginSuccess: action.payload };

        default:
            return state;
    }
};

export const actionCreators = {
    register,
    login,
};

export default reducer;
