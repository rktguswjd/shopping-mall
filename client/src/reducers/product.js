export const initialState = {
    productLoading: false, // 상품 리스트 가져오기 시도 중
    productDone: false,
    productError: null,
    productList: null,

    productDetailLoading: false, // 해당 상품 정보 가져오기 시도 중
    productDetailDone: false,
    productDetailError: null,
    productInfo: null,
};

export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAILURE = "PRODUCT_LIST_FAILURE";

export const PRODUCT_DETAIL_REQUEST = "PRODUCT_DETAIL_REQUEST";
export const PRODUCT_DETAIL_SUCCESS = "PRODUCT_DETAIL_SUCCESS";
export const PRODUCT_DETAIL_FAILURE = "PRODUCT_DETAIL_FAILURE";

export const PRODUCT_SEARCH_REQUEST = "PRODUCT_SEARCH_REQUEST";
export const PRODUCT_SEARCH_SUCCESS = "PRODUCT_SEARCH_SUCCESS";
export const PRODUCT_SEARCH_FAILURE = "PRODUCT_SEARCH_FAILURE";

export const productListRequest = (category = "", keyword = "") => {
    const data = { category, keyword };
    return {
        type: PRODUCT_LIST_REQUEST,
        data,
    };
};

export const productDetailRequest = (id) => {
    return {
        type: PRODUCT_DETAIL_REQUEST,
        id,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // 상품 리스트
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                productLoading: true,
                productDone: false,
                productError: null,
            };
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                productLoading: false,
                productDone: true,
                productList: action.payload,
            };
        case PRODUCT_LIST_FAILURE:
            return {
                ...state,
                productLoading: false,
                productError: action.payload,
            };

        // 상품 정보
        case PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                productDetailLoading: true,
                productDetailDone: false,
                productDetailError: null,
            };

        case PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                productDetailLoading: false,
                productDetailDone: true,
                productInfo: action.payload,
            };
        case PRODUCT_DETAIL_FAILURE:
            return {
                ...state,
                productDetailLoading: false,
                productDetailError: action.payload,
            };

        default:
            return state;
    }
};

export const actionCreators = {
    productListRequest,
    productDetailRequest,
};

export default reducer;
