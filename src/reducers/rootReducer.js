import { combineReducers } from "redux";
import characterReducer from './characterReducer';
import pageReducer from './pageReducer';

export default combineReducers({
    page: pageReducer,
    characters: characterReducer
});