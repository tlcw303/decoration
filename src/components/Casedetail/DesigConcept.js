import React, { Component } from 'react'
import { Card } from "antd";

export default class DesigConcept extends Component {
    render() {
        return (
            <div>
               <p style={{width:'100%',textAlign:'center',padding:'10px',color:'#ff6600'}}>好的设计作品，是使人生活更为幸福的设计作品</p>
               <h5 style={{width:'100%',textAlign:'center',color:'#ccc',
            fontSize:'16px'}}>—— 案例详情 ——</h5>
                <div style={{padding:'20px'}}>
                    <img style={{width:'100%',marginBottom:"10px"}} src={require("./img/001.jpg")} alt="加载失败"/>
                    <img style={{width:'100%',marginBottom:"10px"}} src={require("./img/002.jpg")} alt="加载失败"/>
                    <img style={{width:'100%',marginBottom:"10px"}} src={require("./img/003.jpg")} alt="加载失败"/>
                </div>
                <h5 style={{width:'100%',textAlign:'center',color:'#ccc',
            fontSize:'16px'}}>—— 猜你喜欢 ——</h5>
             <div style={{padding:'5% 5% 20% 5%',display:'flex',justifyContent:"space-around",flexWrap:'wrap'}}>
             <Card
          hoverable
          style={{ width: "45%",}}
          cover={
            <img 
                style={{height:'200px',width:'100%'}}
              alt="example"
              src={require(`./img/006.jpg`)
            }
            />
          }
        >
          <h5 style={{fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>那副苏打粉</h5>
        <span style={{fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>请问</span> <span style={{margin:'0 10px',fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>|</span><span style={{fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>而维特瑞</span><span style={{margin:'0 10px',fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>|</span><span style={{fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>坚持</span>
        </Card>
        <Card
          hoverable
          style={{ width: "45%",}}
          cover={
            <img 
                style={{height:'200px',width:'100%'}}
              alt="example"
              src={require(`./img/006.jpg`)
            }
            />
          }
        >
          <h5 style={{fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>那副苏打粉</h5>
        <span style={{fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>请问</span> <span style={{margin:'0 10px',fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>|</span><span style={{fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>而维特瑞</span><span style={{margin:'0 10px',fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>|</span><span style={{fontSize:'8px',fontWeight:'400',color:'#c4c4c4'}}>坚持</span>
        </Card>
                </div>
            </div>
        )
    }
}
