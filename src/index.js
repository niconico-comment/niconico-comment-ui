import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './component/App'
import store, {runSaga} from './store'
import rootSaga from './saga'

runSaga(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)
