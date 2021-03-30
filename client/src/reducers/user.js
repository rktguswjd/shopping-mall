export const initialState = {
    // store에서 관리할 유저의 정보
    logInLoading: false, // 로그인 시도 중
    logInDone: false,
    logInError: null,
    userInfo: null,

    logOutLoading: false, // 로그아웃 시도 중
    logOutDone: false,
    logOutError: null,

    registerLoading: false, // 회원가입 시도중
    registerDone: false,
    registerError: null,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

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

export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // 회원가입
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

        // 로그인
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

        //로그아웃
        case LOG_OUT_REQUEST:
            return {
                logOutLoading: true,
                logOutDone: false,
                logOutError: null,
            };

        case LOG_OUT_SUCCESS:
            return {
                logOutLoading: false,
                logOutDone: true,
                userInfo: null,
            };

        case LOG_OUT_FAILURE:
            return {
                logOutLoading: false,
                logOutError: action.error,
            };

        default:
            return state;
    }
};

export default reducer;
