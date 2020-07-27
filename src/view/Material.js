import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import axios from "axios";
import { Carousel, WingBlank } from "antd-mobile";
import Ma from "../css/Material.module.css";

class Material extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brandData: [],

            imgHeight: 176,
            bannerList: [],
        };
    }
    get_data = () => {
        axios.get("http://localhost:3001/data").then((res) => {
            //   console.log(res);
            this.setState({
                brandData: res.data,
            });
        });
    };
    get_data_banner = () => {
        axios.get("http://localhost:3001/rotationImg").then((res) => {
            console.log(res);
            this.setState({
                bannerList: res.data,
            });
        });
    };
    componentDidMount() {
        this.get_data_banner();
        this.get_data();
    }
    render() {
        let { brandData, bannerList } = this.state;

        return (
            <div>
                <NavBar
                    className={Ma.header}
                    mode="dark"
                    icon={<Icon type="left" onClick={() => this.props.history.go(-1)} />}
                    onLeftClick={() => console.log("onLeftClick")}
                    rightContent={[]}
                >
                    材料商城
        </NavBar>
                <div className={Ma.header_bottom}></div>
                {this.state.bannerList.length > 0 ? (
                    <WingBlank style={{ marginLeft: "0", marginRight: "0" }}>
                        <Carousel autoplay={true} infinite>
                            {bannerList.map((val) => (
                                <a
                                    key={val}
                                    href={val.url}
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
                    </WingBlank>
                ) : (
                        ""
                    )}

                <div className={Ma.back}>
                    {/* 品牌中心 */}
                    <div className={Ma.brandcenter}>
                        <div></div>
                        <p>品牌中心</p>
                        <div></div>
                    </div>

                    {brandData.map((item, index) => {
                        return (
                            <div key={index} className={Ma.types}>
                                <h3>{item.type}</h3>

                                {item.data.map((i, k) => {
                                    return (
                                        <Link to={"/brandDetails/" + i.id} key={k}>
                                            <div>
                                                <p>{i.brand}</p>
                                                <img src={i.img} alt="" />
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        );
                    })}

                    {/* 精品推荐 */}
                    <div className={Ma.brandcenter}>
                        <div></div>
                        <p>精品推荐</p>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Material);
