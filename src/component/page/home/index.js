import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const HomePage = (props) => (
    <div>Home</div>
)

const connector = connect(
    (dispatch, props) => {
        return {}
    }
)
export default withRouter(connector(HomePage))