import React, { Component } from 'react'
import axios from "axios"

import { withRouter } from "react-router-dom";
import Me from "../css/my.module.css"
import "../iconfont/iconfont.css"
import { Modal } from 'antd-mobile';

const alert = Modal.alert;

class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {}
        }
    }

    goLogin = (value) => {
        if (localStorage.getItem("user") || sessionStorage.getItem("user")) {
            this.props.history.push(`/${value}`)
        } else {
            alert('您还没有登陆', '是否去登陆？', [
                { text: '取消', onPress: () => { return } },
                { text: '确认', onPress: () => (this.props.history.push("/login")) },
            ])
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
                    <span onClick={() => this.goLogin("change")}>
                        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" alt="" />
                    </span>
                    <p>用户20001</p>
                </div>
                <ul className={Me.list}>

                    <li onClick={() => this.goLogin("price")}>
                        <span className="iconfont icon-jisuanqi"></span>
                        <p>装修报价</p>
                        <span className="iconfont icon-you"></span>
                    </li>


                    <li onClick={() => this.goLogin("reserve")}>
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
                    <li onClick={() => (
                        this.props.history.push("/login")
                    )}>
                        <span className="iconfont icon-yijianfankui"></span>
                        <p>意见反馈</p>
                        <span className="iconfont icon-you"></span>
                    </li>
                    <li onClick={() => (
                        this.props.history.push("/register")
                    )}>
                        <span className="iconfont icon-dingwei"></span>
                        <p>我的工地</p>
                        <span className="iconfont icon-you"></span>
                    </li>
                </ul>
                <div className={Me.footer}>
                    不会装修总公司提供技术支持
                </div>
            </div>
        )
    }
}

export default withRouter(My)
