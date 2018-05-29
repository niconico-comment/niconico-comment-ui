import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {hot} from 'react-hot-loader'

import Layout from './Layout'
import Authenticated from './authority/authenticated'

import HomePage from './page/home'
import LoginPage from './page/login'
import RoomPage from './page/room'
import RoomCommentPage from './page/roomComment'

const App = () => {
    const routing = (
        <Switch>
            <Route exact path='/login' component={LoginPage}/>

            <Authenticated>
                <Route path='/' component={HomePage}/>

                <Route path='/rooms/:id' component={RoomPage}/>
                <Route path='/rooms/:id/comments' component={RoomCommentPage}/>
            </Authenticated>
        </Switch>)

    return (
        <Router>
            <Layout children={routing}/>
        </Router>
    )
}

export default hot(module)(App)