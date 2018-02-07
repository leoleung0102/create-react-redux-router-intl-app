import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import logger from 'redux-logger'
import client from './lib/apolloClient';

export const history = createHistory();


const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history),
    logger,
    client,
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
    applyMiddleware(...middleware)
);

export default store