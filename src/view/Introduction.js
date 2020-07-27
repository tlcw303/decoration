import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from "react-router-dom"
import company from "../css/campany.module.scss"
import "../iconfont/iconfont.css"


class Introduction extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            company_list: [],
            companynews_list: [],
            index: JSON.parse(sessionStorage.getItem("index")) || 0,
            company_num: 3,
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/company")
            .then(res => res.json())
            .then(result => this.setState({
                company_list: result
            }))
        fetch("http://localhost:3001/companynews")
            .then(res => res.json())
            .then(result => this.setState({
                companynews_list: result
            }))
    }
    set_css = (num) => {
        sessionStorage.setItem("index", num)
        this.setState({
            index: num
        })
    }
    render() {
        let { company_list, index, companynews_list, company_num } = this.state
        return (
            <div>
                {company_list.length > 0 ? (
                    <div className={company.box}>
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" />}
                            onLeftClick={() => this.props.history.replace("/")}
                            className={company.header}
                        >{company_list[index].company_mark}
                        </NavBar>
                        <div className={company.box_header}>
                            <img src={company_list[index].company_pic} alt="" />
                        </div>
                        <div className={company.box_cent}>
                            <p className={company.box_cent_a}>
                                <img src="./wenjianziliao.svg" alt="" />
                                <img src="./gongzuorizhi.svg" alt="" />
                                <img src="./dianzimingpian.svg" alt="" />
                                <img src="./qiyehuodong.svg" alt="" />
                            </p>
                            <b className={company.box_cent_b}>
                                {
                                    company_list.map((item, key) => (
                                        <span onClick={() => (
                                            this.set_css(key),
                                            this.setState({
                                                index: key,
                                            })
                                        )} key={item.company_ID} className={key === index ? company.style_css : ""} >{item.company_mark}</span>
                                    ))
                                }
                            </b>
                        </div>
                        <div>
                            {index === company_num ? (
                                <ul className={company.companynews_list}>
                                    {
                                        companynews_list.map((k, v) => {
                                            return (
                                                <li onClick={() => this.props.history.replace({
                                                    pathname: "/article",
                                                    state: {
                                                        title_news: k.company_title,
                                                        article_news: k.company_article,
                                                        createtime_news: k.company_createtime
                                                    },
                                                })} key={v} className={company.companynews_list_li}>
                                                    <div className={company.companynews_list_left}>
                                                        <img src={k.company_titlePic} alt="" />
                                                    </div>
                                                    <div className={company.companynews_list_right}>
                                                        <div className={company.company_list_r_a}>
                                                            <b className={company.company_list_r_b}>{k.company_title}</b>
                                                        </div>
                                                        <b className={company.company_list_r_e}>{k.company_createtime}</b>
                                                        <div className={company.company_list_r_c}>
                                                            <span className={company.company_list_r_d}>&emsp;{k.company_article}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            ) : (
                                    <span className={company.indents}>&emsp;&emsp;{company_list[index].company_introduction}</span>
                                )}
                        </div>
                    </div>
                ) : ""
                }
            </div>
        )
    }
}
export default withRouter(Introduction) 
