import React, { Component } from 'react'
import { NavBar, Icon, Steps, WingBlank, WhiteSpace, Tabs, Grid } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import axios from "axios";
import Ta from "../css/team_detail.module.css"
import "../iconfont/iconfont.css"

class Live extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            steps_old: [],
            steps: [],
            steps_site: [],
            obtain_h: [],
            site_progress: [
                "開工大吉",
                "水電改造",
                "泥瓦階段",
                "木工階段",
                "油漆階段",
                "驗收完成"
            ],
            progress_plan_new: []
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: "http://localhost:3001/sitedetail",
            params: {
                site_ID: this.props.match.params.id
            }
        })
            .then(res => {
                this.state.data = res.data[0]
                this.state.progress_plan_new = JSON.parse(JSON.stringify(res.data[0].progress_plan.reverse()))
                this.setState({
                })
            }).then(() => {
                this.state.obtain_h = document.querySelectorAll('.obtain');
                console.log(this.state.obtain_h, "aaaaa")
                this.setState({})
            })


        // console.log(obtain_height, "height")

    }
    render() {
        let { data, steps, site_progress, obtain_h, progress_plan_new } = this.state;
        const Step = Steps.Step;
        steps = site_progress ? site_progress.map((s, i) => <Step key={i} title={s} />) : null;
        const tabs2 = [
            { title: '直播', sub: '1' },
            { title: '团队', sub: '2' },
        ];
        return (
            <div className={Ta.live}>
                <div className={Ta.sss}>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}
                    >查看工地</NavBar>
                </div>
                <main className={Ta.main}>
                    <div id="bg" className={Ta.bg} style={{ backgroundImage: "url(" + data.site_pic + ")" }}>
                        <div>
                            <h3>{data.site_name}</h3>
                            <p>{data.site_area} | {data.case_style}</p>
                            <p>地址 ： {data.site_address}</p>
                        </div>
                        <div className={Ta.ccc}>
                            <WingBlank mode={20} className={Ta.stepsExample}>
                                <Steps current={data.progress_plan ? data.progress_plan.length - 1 : null} direction="horizontal" size="small">{steps}</Steps>
                                <WhiteSpace />
                            </WingBlank>
                        </div>

                    </div>
                    <div className={Ta.content}>
                        <Tabs tabs={tabs2}
                            initialPage={0}
                            tabBarPosition="top"
                            renderTab={tab => <span>{tab.title}</span>}
                        >
                            <div className={Ta.stage_site}>
                                {data.progress_plan ? (progress_plan_new.map((item, index) => {
                                    return (<div className={Ta.obtain} key={index}>
                                        {obtain_h[index] ? console.log(obtain_h[index].offsetHeight) : null}
                                        <b style={{ height: obtain_h[index] ? obtain_h[index].offsetHeight : null }}></b>
                                        <p>
                                            <Icon className={Ta.amicon} type="check-circle-o" />
                                            {item.site_progress}
                                            <span>{item.progress_time}</span>
                                        </p>
                                        <div className={Ta.progress_pic}>
                                            {
                                                item.progress_pic ? (item.progress_pic.map((v, index) => {
                                                    return (<img key={index} src={v} alt="" />)
                                                })) : null
                                            }
                                        </div>
                                        <p>{item.progress_detail}</p>
                                    </div>)
                                })) : null}
                            </div>
                            <div className={Ta.team}>
                                <ul>
                                    {
                                        // data.team ? console.log(data.team.designer) : null
                                        data.team ? data.team.designer.map((v) => {
                                            return (<li key={v.site_designerID}>
                                                <img src={v.site_designerPic} alt="" />
                                                <h3>{v.site_designerName}</h3>
                                                <span>{v.site_designerPosition}</span>
                                            </li>)
                                        }) : null
                                    }
                                    {
                                        data.team ? data.team.building.map((v) => {
                                            return (<li key={v.site_buildingID}>
                                                <img src={v.site_buildingPic} alt="" />
                                                <h3>{v.site_buildingName}</h3>
                                                <span>{v.site_buildingPosition}</span>
                                            </li>)
                                        }) : null
                                    }
                                </ul>

                            </div>
                        </Tabs>
                        <WhiteSpace />
                    </div>
                </main>
                <footer className={Ta.footer}>
                    <span className="iconfont icon-shoucang"></span>
                    <input type="button" value="一键预约" />
                </footer>
            </div>
        )
    }
}
export default withRouter(Live)
