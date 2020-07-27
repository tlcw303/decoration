import React, { Component, createRef } from "react";
import { withRouter } from 'react-router-dom'
import './index.css'
import { Card } from "antd";

const { Meta } = Card;
@withRouter
class CaseImagelist extends Component {
  constructor() {
    super();
    this.state = {
      caseStyle: [],
      isShow: true,

    };
    this.inCart = createRef()
  }
  historyPush = (id) => {
    this.props.history.push('/detail/' + id)
  }
  oneWidth = () => {
    console.log('aaaaaa')
    this.setState({
      isShow: false
    })
  }
  doubleWidth = () => {
    this.setState({
      isShow: true
    })
  }
  render() {
    console.log(this.props)
    return (

      <div
        style={
          {
            paddingTop: "60px",
            display: "flex",
            justifyContent: "left",
            flexWrap: 'wrap',
            padding: '20% 0',
            background: "#f5f5f5",
            height: "100%",
          }
        }
      >
        {

          this.props.data.list.map(item => {
            return (
              <Card
                key={item.case_ID}
                hoverable
                onClick={this.historyPush.bind(this, item.case_ID)}
                style={{ width: this.state.isShow ? "45%" : '100%', padding: '10px', fontSize: '10px', /* float: "left", */ marginLeft: "3.5%" }}
                cover={
                  <img
                    alt="example"
                    src={require(`./img/${item.casePicture}`)}
                  />
                }
              >
                <Meta title={item.case_title} style={{ fontSize: '8px' }}></Meta>
                <span>风格:{item.case_style}</span>
                <p>面积: {item.case_area}</p>
                <span>造价:{item.case_cost}万元</span>
                <div style={{ display: 'flex', justifyContent: 'start', marginTop: '10px' }}>
                  <div>
                    <img src={require('./img/1.jpg')} alt="图片加载失败" style={{ width: '40px', height: '40px', marginRight: "10px", verticalAlign: 'middle', borderRadius: '20px' }} />
                  </div>
                  <div>
                    <h5 style={{ margin: '0', padding: '0' }}>{item.case_buildingName}</h5>
                    <span>{item.case_buildingPosition}</span>
                  </div>
                </div>

              </Card>

            )
          })
        }
        <div style={{ position: 'fixed', top: '50%', right: "0", padding: '5px 10px', backgroundColor: 'rgba(125,125,125,0.5)', borderRadius: "20px 0 0 20px", letterSpacing: '2px', color: '#fff', zIndex: '100' }}

        >
          {this.state.isShow ? <span onClick={this.oneWidth}>单栏布局</span> : <span onClick={this.doubleWidth}>双栏布局</span>}
        </div>
      </div>
    );
  }
}
export default CaseImagelist