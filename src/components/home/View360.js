import React, { Component } from 'react';
import { Link } from "react-router-dom"
import appCss from '../../app.module.css';
import "../../iconfont/iconfont.css"

class View360 extends Component {
    render() {
        return (
            <Link to="/abbr">
                <div className={appCss.tongyong}>
                    <div className={appCss.view360}>
                        <h2>
                            <span>VR全景效果图</span>
                            <span>|</span>
                            <span>360全景</span>
                        </h2>
                        <i>更多</i>
                    </div>
                    <div className={appCss.abbr_pic}>
                        <img src="/designTeam_imgs/1.jpg" alt="" />
                        <span className="iconfont icon-VR"></span>
                    </div>
                </div>
            </Link>
        );
    }
}

export default View360;