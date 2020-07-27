import React, { Component } from 'react';
import axios from "axios"

import { NavBar, Icon, Picker, List, Toast } from 'antd-mobile';

import { withRouter } from "react-router-dom";
import Fd from "../../css/find.module.css"

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

class Find extends Component {
    constructor(params) {
        super(params)
        this.state = {
            list: [],
            sValue: [1, 1, 1, 1, 1],
            visible: false,
        }
    }

    componentDidMount() {
        axios("http://localhost:3001/designer")
            .then(res => (
                this.setState({
                    list: res.data
                })
            ))
    }

    submit_msg = () => {
        let userinfoName = document.querySelectorAll("input")[0].value
        let userinfoPhone = document.querySelectorAll("input")[1].value
        let userinfoAddress = document.querySelectorAll("input")[2].value
        let userinfoArea = document.querySelectorAll("input")[3].value
        let userinfoPattern = this.state.sValue
        let userinfoSource = 1
        let userinfoDesignerid = this.props.match.params.id
        if (userinfoName === "") {
            this.showToast("姓名")
        } else if (userinfoPhone === "") {
            this.showToast("手机号")
        } else if (userinfoAddress === "") {
            this.showToast("房屋所在城市")
        } else if (userinfoArea === "") {
            this.showToast("房屋面积")
        } else {
            axios({
                type: "post",
                url: "http://192.168.9.201:3000/userInfo/reserve",
                params: {
                    userinfoName,
                    userinfoPhone,
                    userinfoAddress,
                    userinfoArea,
                    userinfoPattern,
                    userinfoSource,
                    userinfoDesignerid
                },
                success: function (res) {
                    console.log(res)
                }
            })
        }

    }

    showToast = (data) => {
        Toast.info('请输入' + data, 1);
    }

    render() {
        let { list, sValue } = this.state
        let { id } = this.props.match.params
        // console.log(sValue, "render")
        return (
            <div className={Fd.box}>
                <div className={Fd.header}>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => (this.props.history.go(-1))}
                    >预约设计师</NavBar>
                </div>
                {list.length > 0 && (
                    <div style={{ height: "80vh" }}>
                        <div className={Fd.content}>
                            <img src={list[id].head_picture} alt="" />
                            <p>留下您的信息，让TA联系您</p>
                            <span>设计收费：200.00元/m²</span>
                        </div>
                        <div className={Fd.text}>
                            <div className={Fd.text1}>
                                <input type="text" placeholder="您的称呼" />
                                <input type="number" placeholder="手机号码" />
                                <input type="text" placeholder="房屋所在城市" />
                                <input type="text" placeholder="房屋面积/m²" />
                            </div>
                            <div className={Fd.text2}>
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
                            </div>
                            <div className={Fd.submit} onClick={() => this.submit_msg()}>提交</div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(Find);