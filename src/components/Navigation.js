import React, { Component } from 'react';
import { withRouter, NavLink } from "react-router-dom"

class Navigation extends Component {
    render() {
        return (
            <nav>
                <NavLink activeClassName="active" to={'/'} exact>首頁</NavLink>
                <NavLink activeClassName="active" to={'/case'}>案例</NavLink>
                <NavLink activeClassName="active" to={'/site'}>工地</NavLink>
                <NavLink activeClassName="active" to={'/my'}>我的</NavLink>
            </nav>
        );
    }
}

export default withRouter(Navigation);