import { createStore } from "redux";

const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";

const signUp = (data) => {
    return { type: SIGN_UP, data };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case SIGN_UP:
            return [{ data: action.data }, ...state];

        default:
            return state;
    }
};

export const actionCreators = {
    signUp,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

export default store;
