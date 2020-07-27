import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import { withRouter } from "react-router-dom";
import Pr from "../css/Price.module.css";
import { List, Badge, Picker, WhiteSpace } from "antd-mobile";

const seasons = [
  [
    {
      label: "一室",
      value: 1,
    },
    {
      label: "二室",
      value: 2,
    },
    {
      label: "三室",
      value: 3,
    },
    {
      label: "四室",
      value: 4,
    },
    {
      label: "五室",
      value: 5,
    },
    {
      label: "六室",
      value: 6,
    },
  ],
  [
    {
      label: "一厅",
      value: 1,
    },
    {
      label: "二厅",
      value: 2,
    },
    {
      label: "三厅",
      value: 3,
    },
    {
      label: "四厅",
      value: 4,
    },
    {
      label: "五厅",
      value: 5,
    },
    {
      label: "六厅",
      value: 6,
    },
  ],
  [
    {
      label: "一厨",
      value: 1,
    },
    {
      label: "二厨",
      value: 2,
    },
    {
      label: "三厨",
      value: 3,
    },
    {
      label: "四厨",
      value: 4,
    },
    {
      label: "五厨",
      value: 5,
    },
    {
      label: "六厨",
      value: 6,
    },
  ],
  [
    {
      label: "一卫",
      value: 1,
    },
    {
      label: "二卫",
      value: 2,
    },
    {
      label: "三卫",
      value: 3,
    },
    {
      label: "四卫",
      value: 4,
    },
    {
      label: "五卫",
      value: 5,
    },
    {
      label: "六卫",
      value: 6,
    },
  ],
  [
    {
      label: "一阳台",
      value: 1,
    },
    {
      label: "二阳台",
      value: 2,
    },
    {
      label: "三阳台",
      value: 3,
    },
    {
      label: "四阳台",
      value: 4,
    },
    {
      label: "五阳台",
      value: 5,
    },
    {
      label: "六阳台",
      value: 6,
    },
  ],
];
class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sValue: [1, 1, 1, 1, 1],
      num: 78451,
      num1: parseInt(Math.random() * (99999 + 1 - 10000) + 10000),
    };
  }
  componentDidMount() {
    this.budget();
  }

  budget = () => {
    this.timeId = setInterval(() => {
      let a = parseInt(Math.random() * (99999 + 1 - 10000) + 10000);
      if (this.refs.num) {
        this.refs.num.innerHTML = "0" + a;
      }
      console.log(1);
    }, 500);
  };
  calculation = () => {
    console.log(1);
    console.log(this.state.sValue);
    var oBody = document.querySelector(".calculation_body");
    var oCalculationResult = document.querySelector("#calculationResult");
    oBody.style.display = "none";
    oCalculationResult.style.display = "block";
    clearInterval(this.timeId);
  };

  componentWillUnmount() {
    console.log("销毁");
    clearInterval(this.timeId);
  }
  render() {
    let { sValue, num, num1 } = this.state;
    return (
      <div className={Pr.price}>
        <NavBar
          className={Pr.header}
          mode="dark"
          icon={<Icon type="left" onClick={() => this.props.history.go(-1)} />}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[]}
        >
          装修报价
        </NavBar>

        <div className={Pr.banner}>
          <Badge text={"十年专注装修"} corner className={Pr.banner_s}>
            <p>
              ..............................................................
            </p>
            <p>10秒估算装修报价</p>
            <p>2400万业主/8万合作装修公司/100万设计师</p>
          </Badge>
        </div>

        <div className={"calculation_body"}>
          <div className={Pr.calculation}>
            <div className={Pr.calculationTitle}>
              <div></div>
              <p>你家的装修预算</p>
              <div></div>
            </div>

            <div className={Pr.calculator}>
              <div className={Pr.budget}>
                <span ref="num">{"0" + num}</span>
                <span>元</span>
              </div>
            </div>
            <div className={Pr.priceCalculation}>
              <div>
                <span className={Pr.cost}>人工费:</span>
                <span>?元</span>
              </div>
              <div>
                <span className={Pr.cost}>材料费:</span>
                <span>?元</span>
              </div>
              <div>
                <span className={Pr.cost}>设计费:</span>
                <span>?元</span>
              </div>
              <div>
                <span className={Pr.cost}>质检费:</span>
                <span>?元</span>
              </div>
            </div>
            <input type="text" placeholder="请输入姓名" />
            <input type="text" placeholder="请输入号码" />
            <input type="text" placeholder="请输入面积" />
            <input type="text" placeholder="请输入地址" />
            <WhiteSpace size="lg" />
            <List
              style={{
                width: "95%",
                marginLeft: "2.5%",
                height: "50px",
                borderRadius: "5px",
                overflow: "hidden",
              }}
              className="picker-list"
            >
              <Picker
                data={seasons}
                title="选择"
                cascade={false}
                extra="请选择(可选)"
                value={sValue}
                onChange={(v) => this.setState({ sValue: v })}
                onOk={(v) => this.setState({ sValue: v })}
              >
                <List.Item arrow="horizontal">选择房屋规模</List.Item>
              </Picker>
            </List>
            <button onClick={() => this.calculation()}>立即计算</button>
            <p className={Pr.tip}>填写信息获取量房服务，定制更精准预算规划。</p>
          </div>
          <img src="/zhuangxiubaojia1.jpg" alt="" />
          <img src="/zhuangxiubaojia2.jpg" alt="" />
        </div>

        <div className={Pr.calculationResult} id="calculationResult">
          <div>
            <div>
              <p>装修报价</p>
              <p>{num1}万元</p>
            </div>
            <div>
              <p>人工费：{num1 / 4 + 200.12}元</p>
              <p>材料费：{num1 / 4 + 2000.19}元</p>
              <p>设计费：{num1 / 4 - 200.12}元</p>
              <p>质检费：{num1 / 4 - 2000.19}元</p>
            </div>
          </div>

          <p>*稍后装修管家将回电您，免费提供装修咨询服务</p>
          <p>*因材料品牌及工程量不同，具体报价以量房实测为准</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Price);
