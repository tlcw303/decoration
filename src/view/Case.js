import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { onChange } from '../actions/actionsCreates'
// 导入一个卡片组件

import CaseImagelist from '../components/CaseImagelist'
import { Select } from "antd";
import "../iconfont/iconfont.css"
const { Option } = Select;
const navlist = {
  caseStyle: "风格9",
  housetyle: '户型8',
  area: '面积9',

}
const mapState = (state) => {
  return {
    list: state.caseState.list,
    headerTop: state.caseState.headerTop,
    isLoad: state.caseState.isLoad
  };
};

@connect(mapState, { onChange })
@withRouter
class Case extends Component {
  constructor() {
    super()
    this.state = {
      listed: {}
    }
  }
  handleChange = (value, e) => {

    console.log(e, "eee")
    this.props.onChange(e);
  }

  render() {
    console.log(this.props)
    return (
      <div style={{ background: "#f5f5f5" }}>
        <div style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          height: "45px",
          textAlign: "center",
          fontSize: "20px",
          background: "white",
          zIndex: 5,
        }}>
          <span style={{
            display: "inline-block",
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: "20px",
            marginLeft: "15px",
            border: "1px solid #e6e6e6",
            borderRadius: "50%",
            display: "block",
            width: "35px",
            height: "35px",
            marginTop: "6px",
            color: "black",
          }} onClick={() => (
            this.props.history.push("/")
          )} className="iconfont icon-home"></span>
          <p style={{
            lineHeight: "45px",
            color: "black",
          }}>案例</p>
        </div>
        <div style={{
          position: "fixed",
          top: "45px",
          left: 0,
          width: "100%",
          height: "7%",
          boxSizing: "border-box",
          zIndex: '10',
          background: '#FFFFFF'
        }}>
          <div style={{ display: "flex", justifyContent: "space-around", padding: "5px 0 10px 0", background: "white" }}>
            {
              Object.keys(navlist).map(elem => {
                return (
                  <Select
                    key={elem}
                    labelInValue
                    defaultValue={{ key: navlist[elem] }}
                    style={{ width: 120 }}
                    dropdownMatchSelectWidth={true}
                    onChange={this.handleChange}
                    labelInValue={true}
                  >)
                    {this.props.headerTop[elem].map(item => {
                      return (
                        <Option key={item} label={elem} value={item}>{item}</Option>
                      )
                    })
                    }
                  </Select>
                )
              })
            }
          </div>
        </div>
        <div style={{}}>
          <CaseImagelist
            data={this.props}>
          </CaseImagelist>
        </div>

      </div>
    );
  }
}

export default Case;
