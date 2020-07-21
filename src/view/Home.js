import React, { Component, Fragment } from 'react';
import appCss from '../app.module.css';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className={appCss.header}>
                    <div className={appCss.logo}>LOGO</div>
                    <div className={appCss.search}>麥芒飾裝修系統</div>
                    <div className={appCss.me}>一鍵預約</div>
                </div>
                <div className={appCss.content}>
                    <div className={appCss.banner}>
                        swiper
                        1.活动页面
                        2.案例展示
                        3.一键预约
                    </div>
                    <div className={appCss.news}>
                        <div className={appCss.newsleft}>装饰攻略</div>
                        <div></div>
                    </div>
                    <div className={appCss.nav}>
                        <div>裝修攻略</div>
                        <div>施工团队</div>
                        <div>材料展示</div>
                        <div>工地直播</div>
                        <div>公司介绍</div>
                        <div>最新活动</div>
                        <div>装修报价</div>
                        <div>一键预约</div>
                    </div>
                    <div className={appCss.caseShow}>
                        案例展示
                    </div>
                    <div className={appCss.caseShow}>
                        工地直播
                    </div>
                    <div className={appCss.view360}>
                        360°全景展示
                    </div>
                    <div className={appCss.designTeam}>
                        设计团队
                    </div>
                    <div className={appCss.construtorTeam}>
                        施工团队
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;