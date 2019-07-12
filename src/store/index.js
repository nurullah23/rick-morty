import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import initialState from './initialState.json';

const logger = store => next => action => {
    console.log('previous state', store.getState())
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export default function configureStore(state = initialState) {
    return createStore(
        rootReducer,
        state,
        applyMiddleware(logger, thunk)
    );
};