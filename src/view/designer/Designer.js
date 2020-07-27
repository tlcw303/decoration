import React, { Component } from 'react';
import axios from "axios"
import { NavBar, Icon } from 'antd-mobile';
import { withRouter, Link } from "react-router-dom";
import Dt from "../../css/designer.module.css"

class Designer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            case_list: ["案例作品", "TA的简介"],
            index: 0,
            case_lists: []
        }
    }

    componentDidMount() {
        axios("http://localhost:3001/designer")
            .then(res => (
                this.setState({
                    list: res.data
                })
            ))
        axios("http://localhost:3001/case")
            .then(res => (
                this.setState({
                    case_lists: res.data
                })
            ))

    }
    aaa = () => {
        let { list } = this.state
        let { id } = this.props.match.params
        this.props.history.push("/find/" + list[id].id)
        // if (!localStorage.getItem("user") || !sessionStorage.getItem("user")) {
        //     alert("11111")
        // } else {
        //     this.props.history.push("/find/" + list[id].id)
        // }
    }

    render() {
        let { list, case_list, index, case_lists } = this.state
        let { id } = this.props.match.params
        // console.log(case_lists, "1111")
        let case_lists_last = case_lists.filter(item => item.case_id == id)
        // console.log(case_lists_last[0], "render")
        // console.log(this.props.match.params.id, "render")
        return (
            <div className={Dt.box}>
                <div className={Dt.header}>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => (this.props.history.go(-1))}
                    >设计师</NavBar>
                </div>
                <div className={Dt.content_box}>
                    {
                        list.length > 0 && (
                            <div >
                                <div className={Dt.content}>
                                    <img src={list[id].head_picture} alt="" />

                                    <p>{list[id].designer_name}</p>
                                    <span>{list[id].designer_position}</span><br />
                                    <span>从业经验：{list[id].working_experience}年</span><br />
                                    <p>擅长风格：
                                    {
                                            list[id].good_style.map((item, index) => (
                                                <span key={index}>{item}
                                                    <i className={list[id].good_style.length > 1 && list[id].good_style.length !== index + 1 ? "" : Dt.is_show}>，</i>
                                                </span >
                                            ))
                                        }
                                    </p>
                                </div>

                                <div className={Dt.help}>
                                    <span onClick={() => this.aaa()}>找TA设计<i>付费</i></span>
                                    <span>装饰</span>
                                </div>
                                <ul className={Dt.collection}>
                                    <li>
                                        <p>{list[id].collection_number}</p>
                                        <p>收藏数</p>
                                    </li>
                                    <li></li>
                                    <li>
                                        <p>{list[id].written_permission_number}</p>
                                        <p>签单</p>
                                    </li>
                                    <li></li>
                                    <li>
                                        <p>{list[id].cost_of_design}</p>
                                        <p>设计费</p>
                                    </li>
                                </ul>
                                <ul className={Dt.case_work1}>
                                    {
                                        case_list.map((item, key) => (
                                            <li key={key}
                                                className={index === key ? Dt.active : ""}
                                                onClick={() => (
                                                    this.setState({
                                                        index: key
                                                    })
                                                )}
                                            >
                                                {item}<span className={key === 1 ? Dt.is_show : ""}>({list[id].case_work})</span>

                                            </li>

                                        ))
                                    }
                                </ul>
                                <div className={index === 0 ? Dt.is_show : Dt.text}>
                                    {list[id].individual_Introduction}
                                </div>
                                <div className={index === 1 ? Dt.is_show : Dt.case_work}>
                                    <ul>
                                        {
                                            case_lists_last.length > 0 && case_lists_last[0].case_detail.map((item, index) => (
                                                <li key={index} className={Dt.pic_pic}>
                                                    <div className={index > 0 ? Dt.is_show : ""}>
                                                        <b>{case_lists_last[0].case_style}</b>
                                                        <img src={item} alt="" onClick={() => (
                                                            this.props.history.push("/cases/" + case_lists_last[0].case_id)
                                                        )} />
                                                        <div>
                                                            <p>{case_lists_last[0].case_title}</p>
                                                            <p>
                                                                <span>户型：{case_lists_last[0].case_hometype}</span>
                                                            </p>
                                                            <p className={Dt.jihe}>
                                                                <span>风格：{case_lists_last[0].case_style}</span>
                                                                <span>面积：{case_lists_last[0].case_area}</span>
                                                                <span>造价：{case_lists_last[0].case_cost}万元</span>
                                                            </p>
                                                            <Link to={"/find/" + list[id].id}><i>预约设计</i></Link>
                                                        </div>
                                                    </div>

                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div >
        );
    }
}

export default withRouter(Designer);