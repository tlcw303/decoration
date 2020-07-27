import React, { Component } from 'react'
import axios from "axios"
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import Me from "../css/my.module.css"
import "../iconfont/iconfont.css"


class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {}
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className={Me.box}>
                <div className={Me.header}>
                    <span onClick={() => (
                        this.props.history.push("/")
                    )} className="iconfont icon-home"></span>
                    <p>我的</p>
                </div>
                <div className={Me.pic}>
                    <span onClick={() => (
                        this.props.history.push("/change")
                    )}>
                        <img src="/designTeam_imgs/设计师.jpg" alt="" />
                    </span>
                    <p>用户20001</p>
                </div>
                <ul className={Me.list}>

                    <li onClick={() => (
                        this.props.history.push("/price")
                    )}>
                        <span className="iconfont icon-jisuanqi"></span>
                        <p>装修报价</p>
                        <span className="iconfont icon-you"></span>
                    </li>


                    <li onClick={() => (
                        this.props.history.push("/reserve")
                    )}>
                        <span className="iconfont icon-home"></span>
                        <p>0元设计</p>
                        <span className="iconfont icon-you"></span>
                    </li>


                    <li onClick={() => (
                        this.props.history.push("/")
                    )}>
                        <span className="iconfont icon-shoucang"></span>
                        <p>我的收藏</p>
                        <span className="iconfont icon-you"></span>
                    </li>


                    <li onClick={() => (
                        this.props.history.push("/")
                    )}>
                        <span className="iconfont icon-leijiyuyue"></span>
                        <p>我的预约</p>
                        <span className="iconfont icon-you"></span>
                    </li>

                    <li>
                        <span className="iconfont icon-lianxikefu"></span>
                        <p>联系客服</p>
                        <span className="iconfont icon-you"></span>
                    </li>
                    <li>
                        <span className="iconfont icon-yijianfankui"></span>
                        <p>意见反馈</p>
                        <span className="iconfont icon-you"></span>
                    </li>
                    <li>
                        <span className="iconfont icon-dingwei"></span>
                        <p>我的工地</p>
                        <span className="iconfont icon-you"></span>
                    </li>
                </ul>
                <div className={Me.footer}>
                    麦芒网络科技提供技术支持
                </div>
            </div>
        )
    }
}

export default withRouter(My)
