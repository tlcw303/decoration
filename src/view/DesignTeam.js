import React, { Component } from 'react'
import axios from "axios"
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import Dt from "../css/designTeam.module.css"




class DesignTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {}
        }
        // this.loadingToast()
    }
    // loadingToast = () => {
    //     Toast.loading('Loading...', 0.5, () => {

    //     });
    // }
    componentDidMount() {
        axios("http://localhost:3001/designerTable")
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
            <div className={Dt.box}>
                <div className={Dt.header}>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => (window.history.back(-1))}
                    >设计师团队</NavBar>
                </div>
                <div className={Dt.pic}>
                    <img src="/designTeam_imgs/设计师.jpg" alt="" />
                </div>
                <ul className={Dt.content}>
                    {
                        list.length && list.map(item => <li key={item.id} onClick={() => (

                            this.props.history.push("/designer/" + item.id)
                        )}>
                            <div className={Dt.touxaing}>
                                <img src={item.head_picture} alt="" />
                            </div>
                            <div className={Dt.text}>
                                <span>{item.designer_name}</span><span>{item.designer_position}</span>
                                <ul className={Dt.text2}>
                                    <li>从业经验：<i>{item.working_experience}</i>年</li>
                                    <li>案例作品：<i>{item.case_work}</i>套</li>
                                    <li>擅长风格：
                                        {
                                            item.good_style.map((item2, index2) => (
                                                <span key={index2}>{item2}
                                                    <i className={item.good_style.length > 1 && item.good_style.length !== index2 + 1 ? "" : Dt.is_show}>，</i>
                                                </span>
                                            ))
                                        }
                                    </li>
                                    <li>
                                        <i onClick={(e) => (
                                            e.stopPropagation(),
                                            this.props.history.push("/designer/" + item.id)
                                        )} className={Dt.left}>查看详情</i>
                                        <i onClick={(e) => (
                                            e.stopPropagation(),
                                            this.props.history.push("/order/" + item.id)
                                        )} className={Dt.right}>设计预约</i>
                                    </li>
                                </ul>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default withRouter(DesignTeam)
