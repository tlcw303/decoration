import React, { Component, Fragment } from 'react';
import axios from "axios"
import appCss from '../app.module.css';
import { Link, withRouter } from "react-router-dom"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import "../iconfont/iconfont.css"
import Header from "../components/home/Header"
import Banner from "../components/home/Banner"
import News from "../components/home/News"
import Nav from "../components/home/Nav"
import View360 from "../components/home/View360"
import CaseShow from "../components/home/CaseShow"
import Loop1 from "../components/home/Loop1"
import Loop2 from "../components/home/Loop2"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
        }
    }

    componentDidMount() {

    }

    render() {
        let { list } = this.state
        // console.log(list)
        // console.log(list.length)
        return (
            <div className={appCss.main}>
                <Header></Header>
                <div className={appCss.content}>
                    <Banner></Banner>
                    <News></News>
                    <Nav></Nav>
                    <View360></View360>
                    <CaseShow></CaseShow>
                    <Loop1></Loop1>
                    <Loop2></Loop2>
                    <div className={appCss.caseView}>
                        工地直播
                    </div>
                    <Link to="/designteam">
                        <div className={appCss.designTeam}>
                            工地直播
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);