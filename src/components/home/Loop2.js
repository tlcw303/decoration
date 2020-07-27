import React, { Component } from 'react';
import Swiper from "swiper"
import "swiper/css/swiper.css"
import { Link, withRouter } from "react-router-dom"
import appCss from '../../app.module.css';
import axios from "axios"

class Loop2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        axios("http://localhost:3001/designer")
            .then(res => (
                this.setState({
                    list: res.data
                }),
                new Swiper('.swiper-container-b', {
                    autoplay: true,
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 40,
                    breakpoints: {
                        320: {  //当屏幕宽度大于等于320
                            slidesPerView: 3,
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
            ))
    }
    render() {
        let { list } = this.state
        return (
            <div className={appCss.tongyong}>
                <Link to="/constructionTeam">
                    <div className={appCss.view360}>
                        <h2>
                            <span>施工团队</span>
                            <span>|</span>
                            <span>汇集优秀施工人员</span>
                        </h2>
                        <i>更多</i>
                    </div>
                </Link>
                <div className={appCss.loop2}>
                    <div className="swiper-container-b">
                        <div className="swiper-wrapper">
                            {
                                list.map((item) => (
                                    <div key={item.id} className="swiper-slide">
                                        <div
                                            className={appCss.loop2_pic}
                                            onClick={() => (
                                                this.props.history.push("/designer/" + item.id)
                                            )}
                                        >
                                            <img src={item.head_picture} alt="" />
                                            <p>{item.designer_name}</p>
                                            <p>{item.designer_position}</p>
                                            <p>查看详情</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Loop2);