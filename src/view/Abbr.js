import React, { Component } from 'react';
import axios from "axios"
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import Ab from "../css/abbr.module.css"
import "../iconfont/iconfont.css"

class Abbr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios("http://localhost:3001/abbr")
            .then(res => (
                this.setState({
                    list: res.data
                })
            ))
    }

    render() {
        let { list } = this.state
        // console.log(list, "render")
        return (
            <div className={Ab.box}>
                <div className={Ab.header}>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => (this.props.history.go(-1))}
                    >3D看房</NavBar>
                </div>
                <div className={Ab.pic}>
                    <img src="/designTeam_imgs/M1.jpg" alt="" />
                </div>
                <ul className={Ab.content}>
                    {
                        list.length > 0 && list.map(item => (
                            <li
                                key={item.abbr_id} className={Ab.pic_text}
                                onClick={() => (
                                    this.props.history.push("/abbrlist/" + item.abbr_id)
                                )}
                            >
                                <div>
                                    <img src={item.abbr_pic} alt="" />
                                </div>
                                <p>{item.title}</p>
                                <i>点击预约</i>
                                <div className={Ab.icon}>
                                    <span className="iconfont icon-VR"></span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default withRouter(Abbr);