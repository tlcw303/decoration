import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import Hl from "../css/Headlines.module.css";
import { Carousel, WingBlank } from "antd-mobile";

import { NavBar, Icon } from "antd-mobile";

class Headlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {},
            navigationTitle: [],
            imgHeight: 176,
            index: 0,
            data: [],
            rotationData: [],
        };
        this.getData();
    }
    getData = () => {
        axios.get("http://localhost:3001/homeDecoration?id=1").then((res) => {
            console.log(res, "AAA");
            this.setState(
                {
                    list: res.data,
                    rotationData: res.data.rotationImg,
                    navigationTitle: res.data.navigationTitle,
                },
                () => {
                    console.log(this.state.rotationData, "aaaa");
                }
            );
        });
    };
    componentDidMount() { }

    render() {
        let { list, rotationData, navigationTitle, index } = this.state;
        let list1 = [];

        let navigationTitleData =
            navigationTitle && navigationTitle[0] && navigationTitle[0].navMark
                ? navigationTitle
                : [];
        if (
            list.householdGeomantic &&
            list.householdGeomantic[1] &&
            list.householdGeomantic[1].id
        ) {
            list1 = list.householdGeomantic;
        }
        let list2 =
            list.designKnowledge &&
                list.designKnowledge[1] &&
                list.designKnowledge[1].id
                ? list.designKnowledge
                : [];
        let list3 =
            list.knowledgeOfMaterial &&
                list.knowledgeOfMaterial[1] &&
                list.knowledgeOfMaterial[1].id
                ? list.knowledgeOfMaterial
                : [];

        let listS =
            list &&
                list.householdGeomantic &&
                list.householdGeomantic[0] &&
                list.householdGeomantic[0].id
                ? list
                : {};

        return (
            <div>
                <NavBar
                    className={Hl.header}
                    mode="dark"
                    icon={<Icon type="left" onClick={() => this.props.history.go(-1)} />}
                    onLeftClick={() => console.log("onLeftClick")}
                    rightContent={[]}
                >
                    装修攻略
        </NavBar>
                <WingBlank className={Hl.rotation}
                    style={{ marginLeft: 0, marginRight: 0 }}>
                    {this.state.rotationData.length > 0 ? (
                        <Carousel autoplay={true} infinite>
                            {this.state.rotationData.map((val) => (
                                <a
                                    key={val}
                                    href="http://www.alipay.com"
                                    style={{
                                        display: "inline-block",
                                        width: "100%",
                                        height: this.state.imgHeight,
                                    }}
                                >
                                    <img
                                        src={val.img}
                                        alt=""
                                        style={{ width: "100%", verticalAlign: "top" }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event("resize"));
                                            this.setState({ imgHeight: "auto" });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    ) : (
                            ""
                        )}
                </WingBlank>

                <ul className={Hl.listTitle}>
                    {navigationTitleData.map((item, key) => {
                        return (
                            <li
                                key={item.navTitle}
                                onClick={() => {
                                    this.setState({
                                        index: key,
                                    });
                                }}
                                className={index == key ? Hl.active : ""}

                            >
                                {item.navMark}
                            </li>
                        );
                    })}
                </ul>
                <ol className={Hl.list}>
                    {navigationTitleData.map((item, key) => {
                        return (
                            <li
                                key={key}
                                className={key == this.state.index ? Hl.xianshi : ""}
                            >
                                <Link to="/articledetails">
                                    {listS[item.navTitle].map((i, k) => {
                                        return (
                                            <div key={k} className={Hl.listR}>
                                                <img src={i.picture} alt="" />
                                                <div>
                                                    <h3>{i.title}</h3>
                                                    <span>{i.time}</span>
                                                    <span>{i.count}人预览</span>
                                                    <p>{i.Article}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}

export default withRouter(Headlines);
