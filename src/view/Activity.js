import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { NavBar, Icon, Button } from 'antd-mobile';//引入antd-mobile组件
import activity from "../css/activity.module.scss";//引入scss样式
import "../css/activity.module.reset.css";//引入通用样式
import "../iconfont/iconfont.css";//引入icon图标样式

import { Modal } from 'antd-mobile';

const alert = Modal.alert;

class Activity extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activity_list: [],//获取模拟数据
            index: 0,//定义变量根据key值判断切换按钮
        }
    }
    componentDidMount() {
        //模拟接口调取数据
        fetch("http://localhost:3001/activities")
            .then(res => res.json())
            .then(result => this.setState({
                activity_list: result
            }))
    }
    //设置点击字体颜色
    set_css = (num) => {
        this.setState({
            //传入参数key 赋值给index 根据点击得元素css添加样式
            index: num
        })
    }
    goLogin() {
        let { activity_list, index } = this.state
        if (localStorage.getItem("user") || sessionStorage.getItem("user")) {
            this.props.history.push({
                pathname: "/reserve",
                state: {
                    userinfoSource: 4,
                    activity_price: activity_list[index].activity_price
                }
            })
        } else {
            alert('您还没有登陆', '是否去登陆？', [
                { text: '取消', onPress: () => { return } },
                { text: '确认', onPress: () => (this.props.history.push("/login")) },
            ])
        }
    }

    render() {
        let { activity_list, index } = this.state
        console.log(activity_list)
        return (
            <div>
                {/* 处理第一次获取为空，进行length为零判断 */}
                {activity_list.length > 0 ? (
                    <div className={activity.box}>
                        {/* antd-mobile组件渲染头部 */}
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" />}
                            onLeftClick={() => this.props.history.go(-1)}
                            className={activity.header}
                        >{activity_list[index].activity_price}套餐</NavBar>
                        {/* 根据复制的index渲染上部分图片 */}
                        <div className={activity.box_header}>
                            <img src={activity_list[index].activity_pic} alt="" />
                        </div>
                        <div className={activity.box_cent}>
                            {/* 引入icon图标 */}
                            <p className={activity.box_cent_a}>
                                <img src="./chuang_a.svg" alt="" />
                                <img src="./luohanchuang.svg" alt="" />
                                <img src="./shuzhuo.svg" alt="" />
                                <img src="./dianshigui.svg" alt="" />
                            </p>
                            {/* 遍历循环切换上下样式 */}
                            <p className={activity.box_cent_b}>
                                {
                                    activity_list.map((item, key) => (
                                        <span onClick={() => (
                                            //设置字体样式方法传入Key值
                                            this.set_css(key),
                                            this.setState({
                                                index: key// 把key值赋值给index,根据不同的index渲染上下对应的样式
                                            })
                                        )} key={item.activity_ID} className={key === index ? activity.style_css : ""}>{item.activity_price}套餐</span>
                                    ))
                                }
                            </p>
                        </div>
                        <div>
                            {/* 根据数据渲染 */}
                            <img src={activity_list[index].activity_pic} alt="" />
                            {/* 根据数据渲染 */}
                            <span className={activity.indents}>&emsp;&emsp;{activity_list[index].activity_detail}</span>
                        </div>
                        <Button type="primary"
                            onClick={() => this.goLogin()}>一键预约</Button>
                    </div>
                ) : ""
                }
            </div>
        )
    }
}
export default withRouter(Activity) 