import React, { Component } from 'react';
import axios from "axios"
import { NavBar, Icon, Picker, List, Toast } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import Cg from "../css/change.module.css"
import "../iconfont/iconfont.css"

const seasons = [
    [
        { label: "一室", value: 1 },
        { label: "二室", value: 2 },
        { label: "三室", value: 3, },
        { label: "四室", value: 4, },
        { label: "五室", value: 5, },
        { label: "六室", value: 6, },
    ],
    [
        { label: "一厅", value: 1, },
        { label: "二厅", value: 2, },
        { label: "三厅", value: 3, },
        { label: "四厅", value: 4, },
        { label: "五厅", value: 5, },
        { label: "六厅", value: 6, },
    ],
    [
        { label: "一厨", value: 1, },
        { label: "二厨", value: 2, },
        { label: "三厨", value: 3, },
        { label: "四厨", value: 4, },
        { label: "五厨", value: 5, },
        { label: "六厨", value: 6, },
    ],
    [
        { label: "一卫", value: 1, },
        { label: "二卫", value: 2, },
        { label: "三卫", value: 3, },
        { label: "四卫", value: 4, },
        { label: "五卫", value: 5, },
        { label: "六卫", value: 6, },
    ],
    [
        { label: "一阳台", value: 1, },
        { label: "二阳台", value: 2, },
        { label: "三阳台", value: 3, },
        { label: "四阳台", value: 4, },
        { label: "五阳台", value: 5, },
        { label: "六阳台", value: 6, },
    ],
];

class Change extends Component {
    constructor(params) {
        super(params)
        this.state = {
            list: [],
            sValue: [1, 1, 1, 1, 1],
            visible: false,
        }
    }

    submit_msg = () => {
        console.log(1)
    }

    verification = () => {
        this.props.history.go(-1)
    }

    render() {
        let { sValue } = this.state
        return (
            <div className={Cg.box}>
                <div className={Cg.header}>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.verification()}
                    >修改个人信息</NavBar>
                </div>
                <div className={Cg.content}>
                    <div className={Cg.head}>
                        <p>头像</p>
                        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg" alt="" />
                    </div>
                    <ul className={Cg.text}>
                        <li>
                            <span>姓&nbsp;&nbsp;&nbsp;&nbsp;名</span><input type="text" />
                        </li>
                        <li>
                            <span>新密码</span><input type="password" />
                        </li>
                        <li>
                            <span>旧密码</span><input type="password" />
                        </li>
                        <li>
                            <span>手机号</span><input type="number" />
                        </li>
                        <li>
                            <span>房屋面积/m²</span><input type="text" />
                        </li>
                        <li>
                            <span>房屋所在地</span><input type="text" />
                        </li>
                        <li>
                            <List className="picker-list" id="qqq">
                                <Picker
                                    data={seasons}
                                    title="选择"
                                    cascade={false}
                                    extra="请选择(可选)"
                                    value={sValue}
                                    onChange={(v) => this.setState({ sValue: v })}
                                    onOk={(v) => (
                                        this.setState({ sValue: v })
                                    )}
                                >
                                    <List.Item arrow="horizontal">
                                    </List.Item>
                                </Picker>
                            </List>
                        </li>
                    </ul>
                    <div className={Cg.backcolor}>
                        <div className={Cg.submit} onClick={() => this.submit_msg()}>确认修改</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Change);