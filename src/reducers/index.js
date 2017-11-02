import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import IntlReducer from './IntlReducer';

export default combineReducers({
    routing: routerReducer,
    IntlReducer
})