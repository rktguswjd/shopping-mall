import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAILURE,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAILURE,
} from "../reducers/product";

function productListAPI(category) {
    return [
        {
            id: 1,
            src:
                "https://image.cosstores.com/static/0/8/0/27/A1/hnm40A1270804_01_0947046_001_001_400.jpg",
            name: "텍스처드 롤 넥 베스트",
            price: "57,500원",
            description: "기모찌입니다",
            category: "top",
            stock: "99",
        },
        {
            id: 2,
            src:
                "https://image.cosstores.com/static/5/3/4/24/A1/hnm40A1244356_01_0930726_004_001_400.jpg",
            name: "플리츠 에이라인 울 캐시미어 미니 스커트",
            price: "60,000원",
            description: "기모찌입니다2",
            category: "outer",
            stock: "17",
        },
        {
            id: 3,
            src:
                "https://image.cosstores.com/static/5/2/7/20/A1/hnm40A1207257_01_0934476_001_001_400.jpg",
            name: "캐시미어 가디건",
            price: "145,000원",
            description: "기모찌입니다2",
            category: "pants",
            stock: "5",
        },
        {
            id: 4,
            src:
                "https://image.cosstores.com/static/4/7/8/26/A1/hnm40A1268741_01_0961692_003_001_400.jpg",
            name: "와이드 레그 니티드 쇼츠",
            price: "67,500원",
            description: "기모찌입니다2",
            category: "skirt",
            stock: "75",
        },
    ];
}

function* productList(action) {
    try {
        const result = yield call(productListAPI, action.category);
        yield put({
            type: PRODUCT_LIST_SUCCESS,
            payload: result,
        });
    } catch (error) {
        yield put({
            type: PRODUCT_LIST_FAILURE,
            /*error: err.response.data*/
        });
    }
}

function productDetailAPI(id) {
    const list = [
        {
            id: 1,
            src:
                "https://image.cosstores.com/static/0/8/0/27/A1/hnm40A1270804_01_0947046_001_001_400.jpg",
            name: "텍스처드 롤 넥 베스트",
            price: "57,500원",
            description: "기모찌입니다2",
        },
        {
            id: 2,
            src:
                "https://image.cosstores.com/static/5/3/4/24/A1/hnm40A1244356_01_0930726_004_001_400.jpg",
            name: "플리츠 에이라인 울 캐시미어 미니 스커트",
            price: "60,000원",
            description: "기모찌입니다2",
        },
        {
            id: 3,
            src:
                "https://image.cosstores.com/static/5/2/7/20/A1/hnm40A1207257_01_0934476_001_001_400.jpg",
            name: "캐시미어 가디건",
            price: "145,000원",
            description: "기모찌입니다2",
        },
        {
            id: 4,
            src:
                "https://image.cosstores.com/static/4/7/8/26/A1/hnm40A1268741_01_0961692_003_001_400.jpg",
            name: "와이드 레그 니티드 쇼츠",
            price: "67,500원",
            description: "기모찌입니다2",
        },
    ];

    return list.find((e) => e.id === Number(id));
}

function* productDetail(action) {
    try {
        const result = yield call(productDetailAPI, action.id);
        yield put({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: result,
        });
    } catch (error) {
        yield put({
            type: PRODUCT_DETAIL_FAILURE,
            /*error: err.response.data*/
        });
    }
}

function productCreateAPI(data) {
    return "서공";
}

function* productCreate(action) {
    try {
        yield call(productCreateAPI, action.data);
        yield put({
            type: PRODUCT_CREATE_SUCCESS,
        });
        console.log(action);
    } catch (error) {
        yield put({
            type: PRODUCT_CREATE_FAILURE,
            /*error: err.response.data*/
        });
    }
}

function* watchProductList() {
    yield takeLatest(PRODUCT_LIST_REQUEST, productList);
}

function* watchProductDetail() {
    yield takeLatest(PRODUCT_DETAIL_REQUEST, productDetail);
}

function* watchProductCreate() {
    yield takeLatest(PRODUCT_CREATE_REQUEST, productCreate);
}

export default function* productSaga() {
    yield all([
        fork(watchProductList),
        fork(watchProductDetail),
        fork(watchProductCreate),
    ]);
}
