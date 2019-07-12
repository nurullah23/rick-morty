import { LOAD_PAGE_START, LOAD_PAGE_SUCCESS, LOAD_PAGE_FAILED } from "../data/constants";

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PAGE_START:
            return {
                ...state,
                loading: true
            };

        case LOAD_PAGE_SUCCESS:
            return {
                ...state,
                items: payload,
                loading: false
            };

        case LOAD_PAGE_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            };

        default:
            return state;
    }
}