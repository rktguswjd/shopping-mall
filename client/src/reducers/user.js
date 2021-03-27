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

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";

const LOG_OUT = "LOG_OUT";

const REGISTER_REQUEST = "REGISTER_REQUEST";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerRequestAction = (email, password) => async (dispatch) => {
    // 회원가입 요청시 받아온 응답 저장할 data
    try {
        dispatch({
            type: REGISTER_REQUEST,
        });
        // axios로 회원가입 정보 요청후 응답 성공

        dispatch({
            type: REGISTER_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: REGISTER_FAILURE,
            payload: error.message,
        });
    }
};

export const loginRequestAction = (email, password) => async (dispatch) => {
    // 로그인 요청시 받아온 응답 저장할 data
    try {
        dispatch({
            type: LOG_IN_REQUEST,
        });
        // axios로 이메일과 패스워드 요청후 응답 성공
        dispatch({
            type: LOG_IN_SUCCESS,
            /*payload: data*/
        });
    } catch (error) {
        dispatch({
            type: LOG_IN_FAILURE,
            payload: error.message,
        });
    }
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
