import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Br from "../css/BrandDetails.module.css";

class BrandDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandData: {},
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    // console.log(id);
    this.get_brand_data();
  }
  get_brand_data = () => {
    axios.get("http://localhost:3001/data1").then((res) => {
      console.log(res);
      this.setState({
        brandData: res.data,
      });
    });
  };
  render() {
    let { brandData } = this.state;
    console.log(brandData);
    return (
      <div>
        <NavBar
          className={Br.header}
          mode="light"
          icon={<Icon type="left" onClick={() => this.props.history.go(-1)} />}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[]}
        >
          {brandData.name}
        </NavBar>
        <div className={Br.header_bottom}></div>
        <div className={Br.body}>
          <img src={brandData.img} alt="" />
          <p>{brandData.introduction}</p>
        </div>
        <div className={Br.commodity_list}>
          {brandData.commodity && brandData.commodity.length
            ? brandData.commodity.map((item, index) => {
              return (
                <div key={index} className={Br.com}>
                  <p>{item.name}</p>
                  <img src={item.img} alt="" />
                </div>
              );
            })
            : ""}
        </div>
      </div>
    );
  }
}

export default withRouter(BrandDetails);
