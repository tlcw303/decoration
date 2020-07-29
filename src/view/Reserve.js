import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon, Picker, List, Button } from 'antd-mobile';
import reserve from "../css/reserve.module.scss";


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

class Reserve extends Component {
    constructor(state, context) {
        super(state, context);
        this.state = {
            data: [],
            sValue: [1, 1, 1, 1, 1],
            visible: false,
        };
    }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        let { sValue } = this.state

        return (
            <div className={reserve.box}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                >0元预约
              </NavBar>
                <div className={reserve.header_img}>
                    <img src={"/images/jiazhuangjie.jpg"} alt="" />
                </div>
                <div className={reserve.allInput}>
                    <ul>
                        <li>
                            <input type="text" placeholder="请输入您的称呼" />
                        </li>
                        <li>
                            <input type="text" placeholder="请输入手机号" />
                        </li>
                        <li>
                            <input type="text" placeholder="请输入地址" />
                        </li>
                        <li>
                            <input type="text" placeholder="请输入面积㎡" />
                        </li>
                    </ul>
                    <div>
                        <List className="picker-list" >
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
                    <button>提交</button>
                </div>
            </div>
        )
    }
}
export default withRouter(Reserve)