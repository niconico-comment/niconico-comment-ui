import React from "react"

import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const Authenticated = (props) => {
    let {token, children} = props

    if (!token) {
        return <Redirect to='/login'/>
    }
    return children
}

const connector = connect(({session}) => session)

export default connector(Authenticated)
