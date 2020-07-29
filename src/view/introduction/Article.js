import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { NavBar, Icon } from 'antd-mobile';//antd-mobile组件
import article from "../../css/article.module.scss"//scss样式

import { Modal } from 'antd-mobile';

const alert = Modal.alert;


class Article extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.history.listen(() => {
            document.documentElement.scrollTop = 0
        })
        console.log(this.props)
    }
    goLogin() {
        if (localStorage.getItem("user") || sessionStorage.getItem("user")) {
            this.props.history.replace({
                pathname: "/reserve",
                state: {
                    userinfoSource: 2,
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
        let { title_news, createtime_news, article_news } = this.props.location.state
        return (
            <div className={article.box} >
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.replace("/introduction")}
                    className={article.details_header}
                >文章详情</NavBar>
                <div className={article.details_title}>
                    <img src="./house_construction.svg" alt="" />
                    <span>
                        {title_news}
                    </span>
                </div>
                <div className={article.details_createtime}>
                    <img src="./shijian.svg" alt="" />
                    {createtime_news}
                </div>
                <div className={article.details_article}>
                    &emsp;{article_news}为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口为代表的智能化项目，以国际机场、罗湖口
                </div>
                <button
                    className={article.details_reservation}
                    onClick={() => this.goLogin()}
                >一键预约</button>
            </div>
        )
    }
}
export default withRouter(Article)
