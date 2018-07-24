import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import loginReducer from './login-reducer'

export default combineReducers({
    routing: routerReducer,
    loginReducer,
})
