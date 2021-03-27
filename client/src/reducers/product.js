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

const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
const PRODUCT_LIST_FAILURE = "PRODUCT_LIST_FAILURE";

const PRODUCT_DETAIL_REQUEST = "PRODUCT_DETAIL_REQUEST";
const PRODUCT_DETAIL_SUCCESS = "PRODUCT_DETAIL_SUCCESS";
const PRODUCT_DETAIL_FAILURE = "PRODUCT_DETAIL_FAILURE";

export const productListRequest = (category = "") => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        // 카테고리 별 상품 목록 데이터 요청
        dispatch({ type: PRODUCT_LIST_SUCCESS /*payload: data*/ });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAILURE,
            payload: error.message,
        });
    }
};

export const productDetailRequest = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST });
        // 해당 상품 데이터 요청
        dispatch({ type: PRODUCT_DETAIL_SUCCESS /*payload: data*/ });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAILURE,
            payload: error.message,
        });
    }
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
