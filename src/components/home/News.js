import React, { Component } from 'react';
import Swiper from "swiper"
import "swiper/css/swiper.css"
import appCss from '../../app.module.css';
import { withRouter } from "react-router-dom"

class News extends Component {
    componentDidMount() {
        new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            direction: 'vertical',
            height: 35,
        })
    }

    render() {
        return (
            <div className={appCss.news}>
                <div onClick={() => (
                    this.props.history.push("/headlines")
                )} className={appCss.newsleft}>
                    装修<br />头条
                        </div>
                <div className={appCss.newscenter}></div>
                <div className={appCss.newsright}>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className={appCss.title_text}>
                                    <span>设计知识</span>
                                    <span>设计知识康师傅打开hi䦹到我冷风机so</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className={appCss.title_text}>
                                    <span>家居风水</span>
                                    <span>加的你阿萨德你1111111111111</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className={appCss.title_text}>
                                    <span>家装攻略</span>
                                    <span>加的你阿萨德你</span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className={appCss.title_text}>
                                    <span>设计知识</span>
                                    <span>加的你阿萨德你</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(News);