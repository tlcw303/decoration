import React, { Component } from 'react';
import "swiper/css/swiper.css"
import { Link } from "react-router-dom"
import appCss from '../../app.module.css';
import Swiper from "swiper"


class CaseShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            case_list: ["按风格", "按户型"],
        }
    }

    componentDidMount() {
        new Swiper('.swiper-container-a', {
            // autoplay: true,
            height: 500,
            slidesPerView: 1,
            spaceBetween: 40,
            breakpoints: {
                320: {  //当屏幕宽度大于等于320
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                768: {  //当屏幕宽度大于等于768 
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1280: {  //当屏幕宽度大于等于1280
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        })
    }

    render() {
        let { index, case_list } = this.state
        return (
            <div className={appCss.tongyong}>
                <Link to="/">
                    <div className={appCss.view360}>
                        <h2>
                            <span>案例展示</span>
                            <span>|</span>
                            <span>精选3000套</span>
                        </h2>
                        <i>更多</i>
                    </div>
                </Link>
                <ul className={appCss.caseShow}>
                    {
                        case_list.map((item, key) => (
                            <li
                                className={index === key ? appCss.active : ""}
                                key={key}
                                onClick={() => (
                                    this.setState({
                                        index: key
                                    })
                                )}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <div className={index === 0 ? appCss.loop1 : appCss.show} >
                    <div className="swiper-container-a">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className={appCss.loop1_pic}>
                                    <img src="/style/1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className={appCss.loop1_pic}>
                                    <img src="/style/2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className={appCss.loop1_pic}>
                                    <img src="/style/3.jpg" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className={appCss.loop1_pic}>
                                    <img src="/style/4.jpg" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className={appCss.loop1_pic}>
                                    <img src="/style/5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CaseShow;