import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const RoomCommentPage = (props) => (
    <div>Comments</div>
)

const connector = connect(
    (dispatch, props) => {
        return {}
    }
)
export default withRouter(connector(RoomCommentPage))