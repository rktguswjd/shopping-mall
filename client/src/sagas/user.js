import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT,
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

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchRegister() {
    yield takeLatest(REGISTER_REQUEST, register);
}

export default function* userSaga() {
    yield all([fork(watchLogin), fork(watchRegister)]);
}
