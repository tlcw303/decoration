import React, { Component } from 'react';
import "../../iconfont/iconfont.css"
import appCss from '../../app.module.css';
import { withRouter } from "react-router-dom"

import { Modal } from 'antd-mobile';

const alert = Modal.alert;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goLogin() {
        if (localStorage.getItem("user") || sessionStorage.getItem("user")) {
            this.props.history.push("/reserve")
        } else {
            alert('您还没有登陆', '是否去登陆？', [
                { text: '取消', onPress: () => { return } },
                { text: '确认', onPress: () => (this.props.history.push("/login")) },
            ])
        }
    }

    render() {
        return (
            <div>
                <div className={appCss.header}>
                    <span>
                        <img src="/designTeam_imgs/logo.jpg" alt="" />
                    </span>
                    <p>不会装修系统</p>
                    <span onClick={() => this.goLogin()}>
                        <div id={appCss.animat} className="iconfont icon-xin"></div>
                    </span>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);