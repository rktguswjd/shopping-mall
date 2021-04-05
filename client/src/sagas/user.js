import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
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
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
} from "../reducers/user";

function logInAPI(data) {
    // return axios.post("/member/signIn", data);
    return { token: "sndWEsfsDAFg23SF43" };
}
function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data);
        console.log(action);
        console.log(result);
        yield put({
            type: LOG_IN_SUCCESS,
            payload: result,
        });
    } catch (error) {
        yield put({
            type: LOG_IN_FAILURE,
            error: error.response.data,
        });
    }
}

function registerAPI(data) {
    return axios.post("/member/signUp", data);
}

function* register(action) {
    try {
        const result = yield call(registerAPI, action.data);
        console.log(result);
        yield put({
            type: REGISTER_SUCCESS,
            payload: result,
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
    } catch (error) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: error.response.data,
        });
    }
}

function loadUserAPI(data) {
    return { name: "현정", isAdmin: true };
}

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        yield put({
            type: LOAD_USER_SUCCESS,
            payload: result,
        });
    } catch (error) {
        yield put({
            type: LOAD_USER_FAILURE,
            error: error.response.data,
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

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchRegister),
        fork(watchLogout),
        fork(watchLoadUser),
    ]);
}
