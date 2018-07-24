import {call, take} from 'redux-saga/effects'
import axios from 'axios'

const domain = 'http://localhost:9000'
const API = {
    login: (payload) => {
        return axios.post(domain + '/api/login')
            .then(res => {
                return {res}
            })
            .catch(err => {
                return {err}
            })
    },
}

export function* authSaga() {
    while (true) {
        const action = yield take('AUTH_LOGIN')

        const {payload, error} = yield call(API.login, action.payload);

        // TODO stateの変更
        if (payload && !error) {
            // yield put(successUser(payload));
        } else {
            // yield put(failureUser(error));
        }
    }
}