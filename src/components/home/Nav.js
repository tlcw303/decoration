import React, { Component } from 'react';
import appCss from '../../app.module.css';
import "../../iconfont/iconfont.css"
import { Link, withRouter } from "react-router-dom"
import { Modal } from 'antd-mobile';

const alert = Modal.alert;

class Nav extends Component {
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
            <ul className={appCss.nav}>
                <li><Link to="/designteam">
                    <span className="iconfont icon-tuandui1"></span>
                    <p>设计团队</p>
                </Link></li>
                <li><Link to="/constructionteam">
                    <span className="iconfont icon-tuandui"></span>
                    <p>施工团队</p>
                </Link></li>
                <li><Link to="/material">
                    <span className="iconfont icon-shouyetubiao-09"></span>
                    <p>材料展示</p>
                </Link></li>
                <li><Link to="/site">
                    <span className="iconfont icon-zhibojianying"></span>
                    <p>工地直播</p>
                </Link></li>
                <li><Link to="/introduction">
                    <span className="iconfont icon-gongsi"></span>
                    <p>公司介绍</p>
                </Link> </li>
                <li><Link to="/activity">
                    <span className="iconfont icon-huodong-copy"></span>
                    <p>最新活动</p>
                </Link> </li>
                <li onClick={() => this.goLogin()}>
                    <span className="iconfont icon-houtaizhuangxiu"></span>
                    <p>装修报价</p>
                </li>
                <li onClick={() => this.goLogin()}>
                    <span className="iconfont icon-yuyuejianying"></span>
                    <p>一键预约</p>
                </li>
            </ul>
        );
    }
}

export default withRouter(Nav);