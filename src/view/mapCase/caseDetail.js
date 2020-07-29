import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { onDetailById } from '../../actions/actionsCreates'
import './main.css'
import Casedetail from '../../components/Casedetail'
import { connect } from "react-redux";
import { Card } from "antd";
import { LeftOutlined, HomeOutlined, HeartOutlined } from '@ant-design/icons';
const { Meta } = Card;
const mapState = (state) => {
  return {
    list: state.caseState.list,
  };
};
@connect(mapState, { onDetailById })
@withRouter
class caseDetail extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      isShow: false
    }
  }
  componentDidMount() {
    this.props.onDetailById(this.props.match.params.id)
  }
  render() {
    console.log(this.props.list[0])
    return (

      // 最顶部
      <div>
        <div style={{ width: '100%', display: 'flex', zIndex: "99", top: "0", justifyContent: 'space-around', padding: '10px', position: "fixed", top: "0", backgroundColor: "#fff" }}>
          <Link to="/case"> <span onClick={this.changePush}><LeftOutlined /></span></Link>
          <span style={{ flex: '1', textAlign: 'center', fontWeight: '100', fontSize: "20px" }}>案例详情</span>
          <span></span>
        </div>
        {/* 照片 风格  北欧  价格  收藏 */}
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={
            <img
              style={{ height: '300px', width: '100%' }}
              alt="example"
              src={require(`./img/${this.props.list[0].casePicture}`)
              }
            />
          }
        >
          <h5 style={{ fontSize: '8px', fontWeight: '400', color: '#666' }}>{this.props.list[0].case_title},{this.props.list[0].case_area}</h5>
          <span style={{ fontSize: '8px', fontWeight: '400', color: '#c4c4c4' }}>{this.props.list[0].case_style}</span> <span style={{ margin: '0 10px', fontSize: '8px', fontWeight: '400', color: '#c4c4c4' }}>|</span><span style={{ fontSize: '8px', fontWeight: '400', color: '#c4c4c4' }}>{this.props.list[0].case_cost}</span>
          <span style={{ color: '#fff', }}>
            <HeartOutlined style={{ fontSize: '36px', position: 'absolute', bottom: '10px', right: '20px', overflow: "hidden", color: this.state.isShow ? 'red' : "#ccc" }} />
          </span>
        </Card>
        {/* 设计名字 */}
        <div style={{ display: 'flex', justifyContent: 'start', marginTop: '10px', width: '100%' }}>
          <div style={{ padding: '5px 0 5px 20px' }}>
            <img src={require('./img/1.jpg')} alt="图片加载失败" style={{ width: '40px', height: '40px', marginRight: "10px", verticalAlign: 'middle', borderRadius: '20px' }} />
          </div>
          <div>
            <h5 style={{ margin: '0', padding: '0', fontWeight: '400', color: '#ababab' }}>{this.props.list[0].case_buildingName}</h5>
            <span>{this.props.list[0].case_buildingPosition}</span>
          </div>
          <div style={{ flex: '1', textAlign: 'end', paddingRight: '10px', lineHeight: '40px', }}> <span ></span></div>
        </div>

        {/*  设计理念   施工团队   这是个组件 */}
        <Casedetail></Casedetail>
        <div style={{ width: '100%', display: 'flex', position: 'fixed', bottom: '0', backgroundColor: '#fff', padding: '10px 20px' }}>
          <span style={{ width: '50%', textAlign: 'center', height: '40px', lineHeight: '40px', fontSize: '16px', fontWeight: '700', backgroundColor: "#ed1212", borderRadius: '20px 0 0 20px', color: '#fff', letterSpacing: '5px' }}>收藏</span>
          <span style={{ width: '50%', textAlign: 'center', height: '40px', lineHeight: '40px', fontSize: '16px', fontWeight: '700', backgroundColor: "#aa9696", borderRadius: '0 20px 20px 0 ', color: '#fff', letterSpacing: '5px' }}>找Ta设计</span>
        </div>
        <Link to="/">
          <div style={{ position: 'fixed', bottom: "30%", right: '0', backgroundColor: 'rgba(125,125,125,0.5)', padding: '10px', borderRadius: '30px' }} >
            <span ><HomeOutlined style={{ fontSize: "42px", color: '#fff' }} /></span>
          </div></Link>
      </div>
    );
  }
}
export default caseDetail;
