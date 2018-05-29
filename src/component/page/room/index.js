import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const RoomPage = (props) => (
    <div>Room</div>
)

const connector = connect(
    (dispatch, props) => {
        return {}
    }
)
export default withRouter(connector(RoomPage))