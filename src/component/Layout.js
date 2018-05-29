import React from 'react'
import {NavLink} from 'react-router-dom'

import styled from 'styled-components'

const Header = styled.nav.attrs({className: 'navbar'})`
    box-shadow: 0 2px 0 0 #f5f5f5;
`

const Layout = props => ([
    <Header>
        <div className="container">
            <div className="navbar-brand">
                <NavLink to="/" className="navbar-item">
                    niconico-comment
                </NavLink>
            </div>

            <div className="navbar-menu">
                <div className="navbar-end">
                    <NavLink to="/" className="navbar-item">Home</NavLink>
                    <NavLink to="/login" className="navbar-item">Login</NavLink>
                </div>
            </div>
        </div>
    </Header>,
    <main className="container">
        {props.children}
    </main>
])

export default Layout
