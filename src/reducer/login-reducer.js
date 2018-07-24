import {handleActions} from 'redux-actions'
import actions from '../actions/auth-actions'

const initialState = {
    userId: null,
    password: null,
}

export default handleActions({
    [actions.authLogin]: (state, action) => {
        console.log('reducer', state, action)

        return {...state, ...action.payload}
    },
}, initialState)