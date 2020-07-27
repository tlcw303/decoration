import React, { Component } from 'react';
import { withRouter, NavLink } from "react-router-dom"
import "../iconfont/iconfont.css"

class Navigation extends Component {
    render() {
        return (
            <nav>
                <NavLink activeClassName="active" to={'/'} exact>
                    <span className="iconfont icon-shouye"></span>
                    <p>首页</p>
                </NavLink>
                <NavLink activeClassName="active" to={'/case'}>
                    <span className="iconfont icon-anlihuicui"></span>
                    <p>案例</p>
                </NavLink>
                <NavLink activeClassName="active" to={'/site'}>
                    <span className="iconfont icon-zhihuigongdi"></span>
                    <p>工地</p>
                </NavLink>
                <NavLink activeClassName="active" to={'/my'}>
                    <span className="iconfont icon-tuandui1"></span>
                    <p>我的</p>
                </NavLink>
            </nav>
        );
    }
}

export default withRouter(Navigation);