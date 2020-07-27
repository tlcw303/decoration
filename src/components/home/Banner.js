import React, { Component } from 'react';
import appCss from '../../app.module.css';
import { Carousel } from 'antd';

class Banner extends Component {
    render() {
        return (
            <div className={appCss.banner}>
                <Carousel effect="fade" autoplay="true">
                    <div>
                        <img src="/designTeam_imgs/M1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/designTeam_imgs/蝴蝶忍.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/designTeam_imgs/炭治郎.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Banner;