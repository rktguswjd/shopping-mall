const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";

export const initialState = {
    // 상품 정보
};

const productListRequest = (data) => {
    // shop 페이지 클릭 시 모든 상품 리스트 요청
    return { type: PRODUCT_LIST_REQUEST, payload: data };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, productList: action.payload };

        default:
            return state;
    }
};

export const actionCreators = {
    productListRequest,
};

export default reducer;
