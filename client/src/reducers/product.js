export const initialState = {
    productLoading: false, // 상품 리스트 가져오기 시도 중
    productDone: false,
    productError: null,
    productList: null,

    productDetailLoading: false, // 해당 상품 정보 가져오기 시도 중
    productDetailDone: false,
    productDetailError: null,
    productInfo: null,

    cartList: null, // 장바구니 정보
    cartAddLoading: false, // 장바구니 담기 시도중
    cartAddDone: false,
    cartAddError: null,

    cartRemoveLoading: false, // 장바구니 상품 삭제 시도중
    cartRemoveDone: false,
    cartRemoveError: null,

    productCreateLoading: false, // 관리자 상품 등록
    productCreateDone: false,
    productCreateError: null,
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

export const CART_ADD_REQUEST = "CART_ADD_REQUEST";
export const CART_ADD_SUCCESS = "CART_ADD_SUCCESS";
export const CART_ADD_FAILURE = "CART_ADD_FAILURE";

export const CART_REMOVE_REQUEST = "CART_REMOVE_REQUEST";
export const CART_REMOVE_SUCCESS = "CART_REMOVE_SUCCESS";
export const CART_REMOVE_FAILURE = "CART_REMOVE_FAILURE";

export const PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST";
export const PRODUCT_CREATE_SUCCESS = "PRODUCT_CREATE_SUCCESS";
export const PRODUCT_CREATE_FAILURE = "PRODUCT_CREATE_FAILURE";

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

export const cartAddRequest = (id, qty) => {
    const data = { id, qty };
    return {
        type: CART_ADD_REQUEST,
        data,
    };
};

export const productCreateRequest = (data) => {
    return {
        type: PRODUCT_CREATE_REQUEST,
        data,
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

        // 상품 등록
        case PRODUCT_CREATE_REQUEST:
            return {
                ...state,
                productCreateLoading: true,
                productCreateDone: false,
                productCreateError: null,
            };
        case PRODUCT_CREATE_SUCCESS:
            return {
                ...state,
                productCreateLoading: false,
                productCreateDone: true,
            };
        case PRODUCT_CREATE_FAILURE:
            return {
                ...state,
                productCreateLoading: false,
                productCreateError: action.payload,
            };
        default:
            return state;
    }
};

export const actionCreators = {
    productListRequest,
    productDetailRequest,
    productCreateRequest,
};

export default reducer;
