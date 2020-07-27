import React, { Component } from 'react';
import "../../iconfont/iconfont.css"
import appCss from '../../app.module.css';
import { withRouter } from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <div>
                <div className={appCss.header}>
                    <span>
                        <img src="/designTeam_imgs/logo.jpg" alt="" />
                    </span>
                    <p>麦芒装修系统</p>
                    <span onClick={() => {
                        this.props.history.push("/reserve")
                    }}>
                        <div id={appCss.animat} className="iconfont icon-xin"></div>
                    </span>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);