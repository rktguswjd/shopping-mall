import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from "../reducers/user";

function logInAPI(data) {
    return { name: "현정" };
}
function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data);
        console.log(result);
        yield put({
            type: LOG_IN_SUCCESS,
            payload: result,
        });
    } catch (error) {
        yield put({
            type: LOG_IN_FAILURE,
            /*error: err.response.data*/
        });
    }
}

function registerAPI(data) {
    return "성공";
}

function* register(action) {
    try {
        const result = yield call(registerAPI, action.data);
        yield put({
            type: REGISTER_SUCCESS,
            /*payload: result.data*/
        });
    } catch (error) {
        yield put({
            type: REGISTER_FAILURE,
            /*error: err.response.data*/
        });
    }
}

function logOutAPI() {
    return "로그아웃 성공";
}

function* logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchRegister() {
    yield takeLatest(REGISTER_REQUEST, register);
}

function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
    yield all([fork(watchLogin), fork(watchRegister), fork(watchLogout)]);
}
