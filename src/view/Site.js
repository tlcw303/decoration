import React, { Component } from 'react'
import axios from "axios";
import { Tabs, WhiteSpace } from 'antd-mobile';
import Tmd from "../css/team.module.css";
import { withRouter } from 'react-router-dom'

class ConstructionTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: "none",
            is_show: true,
            data: {},
            list: [],
            case_style: [],
            progress_plan: [],
            construction_down: [],
            construction_down_new: [],
            look_construction: '',
            tabs2: [],
            tabs: [],
            card: ["卡片式", "柵格式"],
            card_show: true
        }
    }
    componentDidMount() {
        axios("http://localhost:3001/constructiontable")
            .then(res => {
                this.state.data = res.data;
                this.state.list = res.data.community_area;
                this.state.case_style = res.data.case_style;
                this.state.progress_plan = res.data.progress_plan;
                this.state.construction_down = res.data.construction_down;
                this.state.construction_down_new = res.data.construction_down;
                this.setState({
                    tabs2: JSON.parse(JSON.stringify([
                        { title: '小區', sub: '1' },
                        { title: '裝修風格', sub: '2' },
                        { title: '裝修階段', sub: '3' }
                    ])),
                    tabs: JSON.parse(JSON.stringify([
                        { title: '小區', sub: '1' },
                        { title: '裝修風格', sub: '2' },
                        { title: '裝修階段', sub: '3' }
                    ])),
                })
                // console.log(res.data)
            })
    }
    chicker() {
        this.setState({
            is_show: !this.state.is_show
        })
    }
    // 小區過濾
    clickLi(item1) {
        // console.log(item1)
        let { construction_down, construction_down_new, tabs2 } = this.state
        // console.log(tabs2[0], "aaaa")
        // e.target.style.display = "none"
        construction_down = construction_down_new.filter((item) => {
            // console.log(item.community_name, "1231323")
            return item.community_name == item1
        });
        // console.log(construction_down, "aaaaa")
        // console.log(construction_down_new, "bbb")
        tabs2[0].title = item1
        this.setState({
            construction_down,
            is_show: !this.state.is_show,
            tabs2
        })
    }
    // 風格過濾
    clickListyle(v) {
        let { construction_down, construction_down_new, tabs2 } = this.state
        construction_down = construction_down_new.filter((item) => {
            // console.log(item.case_style, "1231323")
            return item.case_style == v
        });
        tabs2[1].title = v
        this.setState({
            construction_down,
            is_show: !this.state.is_show,
            tabs2
        })
    }
    // 裝修階段過濾
    clickListage(v) {
        let { construction_down, construction_down_new, tabs2 } = this.state
        construction_down = construction_down_new.filter((item) => {
            // console.log(item.progress_plan, "1231323")
            return item.progress_plan == v
        });
        tabs2[2].title = v
        this.setState({
            construction_down,
            is_show: !this.state.is_show,
            tabs2
        })
    }
    // 不過濾
    clickListart() {
        this.state.tabs2 = JSON.parse(JSON.stringify(this.state.tabs))
        // console.log(this.state.tabs)
        this.setState({
            construction_down: this.state.construction_down_new,
            is_show: !this.state.is_show,
            tabs2: this.state.tabs2
        })
    }
    // 獲取搜索框的值
    inputChange(e) {
        // console.log(e.target.value)
        this.state.look_construction = e.target.value
        this.setState({
            look_construction: this.state.look_construction
        })
    }
    // 點擊搜索
    searchCommunity() {
        let { look_construction, construction_down, construction_down_new } = this.state;
        if (look_construction) {
            construction_down = construction_down_new.filter((item) => {
                // console.log(item.site_name, "1231323")
                // console.log(look_construction, "vvvv")
                return item.site_name.includes(look_construction)
            });
        } else {
            construction_down = construction_down_new
        }
        this.setState({
            construction_down
        })
    }
    render() {
        let { tabs2, is_show, show, list, case_style, progress_plan, construction_down, card, card_show } = this.state;
        // console.log(this.state)
        return (
            <div className={Tmd.site}>
                <div className={Tmd.header}>
                    <span onClick={() => (
                        this.props.history.push("/")
                    )} className="iconfont icon-home"></span>
                    <p>工地</p>
                </div>
                < div className={Tmd.xiaoqu} style={{ heigth: is_show ? 44 : 250 }}>
                    <Tabs tabs={tabs2}
                        initialPage={0}
                        tabBarPosition="top"
                        animated={false}
                        renderTab={tab => <span onClick={this.chicker.bind(this)}>{tab.title}</span>}
                    >
                        <div className={Tmd.heightauto} style={{ display: is_show ? show : "block" }} >
                            {
                                list ? <Tabs tabs={list}
                                    initialPage={0}
                                    tabBarPosition="left"
                                    animated={false}
                                    renderTab={tab => <span>{tab.title}</span>}
                                >
                                    {
                                        list.map((item, idx) => <ul key={idx}>
                                            <li onClick={this.clickListart.bind(this)}>不限</li>
                                            {
                                                item.sub.map((item1, index) => {
                                                    return (<li onClick={this.clickLi.bind(this, item1)} key={'abnc' + index}>{item1}</li>)
                                                })
                                            }
                                        </ul>)
                                    }
                                </Tabs> : null}

                            <WhiteSpace />
                        </div>
                        <ul className={Tmd.heightauto} style={{ display: is_show ? show : "block" }} >
                            <li onClick={this.clickListart.bind(this)}>不限</li>
                            {
                                case_style.map((v, index) => (
                                    <li onClick={this.clickListyle.bind(this, v)} key={'zzz' + index}>
                                        {v}
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className={Tmd.heightauto} style={{ display: is_show ? show : "block" }} >
                            <li onClick={this.clickListart.bind(this)}>不限</li>
                            {
                                progress_plan.map((v, index) => (
                                    <li onClick={this.clickListage.bind(this, v)} key={index + "fff"}>
                                        {v}
                                    </li>
                                ))
                            }
                        </ul>
                    </Tabs>
                    <WhiteSpace />
                </div >
                <div className={Tmd.search}>
                    <div className={Tmd.search_list}>
                        <input onChange={this.inputChange.bind(this)} type="text" placeholder="輸入你想查看的工地名稱" />
                        {/* <input onClick={this.searchCommunity.bind(this)} type="button" value="搜索" /> */}
                        <span onClick={this.searchCommunity.bind(this)}>搜索</span>
                    </div>

                </div>
                <span onClick={(e) => this.setState({ card_show: !this.state.card_show })}>{card_show ? card[0] : card[1]}</span>
                <div className={Tmd.main_list}>
                    {construction_down.map((v) => (
                        card_show ? (<div key={v.site_ID} className={Tmd.card} onClick={() => {
                            this.props.history.push("/live/" + v.site_ID)
                        }}>
                            <div className={Tmd.card_img} style={{ backgroundImage: "url(" + v.progress_pic[0] + ")" }}>
                                <span>{v.progress_plan}</span>
                            </div>
                            <div className={Tmd.card_bottom}>
                                <p><i>{v.site_name}</i><span>{v.progress_plan}</span></p>
                                <span>{v.case_style} | {v.site_area}</span>
                            </div>
                        </div>) :
                            (<div key={v.site_ID} className={Tmd.specific} onClick={() => {
                                this.props.history.push("/live/" + v.site_ID)
                            }}>
                                {/* {console.log(v)} */}
                                <h2>{v.community_name} : {v.site_name}<span>更新至<i>{v.progress_plan}</i></span></h2>
                                <div className={Tmd.design}>
                                    <div>
                                        <img src={v.designer_pic} alt="" />
                                    </div>
                                    <div>
                                        <i>{v.designer_name}</i>
                                        <i>{v.designer_position}</i>
                                    </div>
                                    <span>{v.progress_time}</span>
                                </div>
                                <p>地址：{v.community_addr}</p>
                                <div className={Tmd.card_pic}>
                                    {
                                        (v.progress_pic.slice(0, 3).map((item, i) => {
                                            return (<img key={'ff' + i} src={item} alt="" />)
                                        }))
                                    }
                                </div>
                            </div>)
                    ))}
                </div>

            </div >
        )
    }
}
export default withRouter(ConstructionTeam)