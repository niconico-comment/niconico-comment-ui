import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const LoginPage = (props) => (
    <div>Login</div>
)

const connector = connect(
    (dispatch, props) => {
        return {}
    }
)
export default withRouter(connector(LoginPage))