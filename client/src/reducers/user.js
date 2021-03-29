export const initialState = {
    // store에서 관리할 유저의 정보
    logInLoading: false, // 로그인 시도 중
    logInDone: false,
    logInError: null,
    userInfo: null,

    registerLoading: false, // 회원가입 시도중
    registerDone: false,
    registerError: null,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT = "LOG_OUT";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    };
};

export const registerRequestAction = (data) => {
    return {
        type: REGISTER_REQUEST,
        data,
    };
};

export const logout = () => {
    return { type: LOG_OUT };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                registerLoading: true,
                registerDone: false,
                registerError: null,
            };
        case REGISTER_SUCCESS:
            return { ...state, registerLoading: false, registerDone: true };
        case REGISTER_FAILURE:
            return {
                ...state,
                registerLoading: false,
                registerError: action.payload,
            };

        case LOG_IN_REQUEST:
            return {
                ...state,
                logInLoading: true,
                logInDone: false,
                logInError: null,
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                logInLoading: false,
                logInDone: true,
                userInfo: action.payload,
            };
        case LOG_IN_FAILURE:
            return {
                ...state,
                logInLoading: false,
                logInError: action.payload,
            };
        case LOG_OUT:
            return { ...state, userInfo: null };

        default:
            return state;
    }
};

export default reducer;
