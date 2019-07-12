import {
    CHARACTER_API_URL,
    LOAD_PAGE_START,
    LOAD_PAGE_SUCCESS,
    LOAD_PAGE_FAILED,
    UPDATE_PAGINATION
} from "../data/constants";


export const loadCharacters = (url = CHARACTER_API_URL) => async (dispatch) => {
    dispatch({
        type: LOAD_PAGE_START
    });

    await fetch(url)
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: UPDATE_PAGINATION,
                payload: response.info
            });

            dispatch({
                type: LOAD_PAGE_SUCCESS,
                payload: response.results || []
            });
        }).catch((error) => {
            dispatch({
                type: LOAD_PAGE_FAILED,
                payload: error || null
            });
        });
};
