import React, { Component } from 'react'
import DesigConcept from './DesigConcept.js'
import ConstructionTeam from './ConstructionTeam.js'
export default class Casedetail extends Component {
    constructor(){
        super()
        this.state={
            isShow:true
        }
    }
    render() {
        return (
            <>
                <div style={{width:'100%',display:'flex',justifyContent:'space-evenly',height:'40px'}}>
                  <span style={{width:'50%',textAlign:'center',borderBottom:this.state.isShow?'1px solid #cccccc':'',
                  color:this.state.isShow?'#ccc':'',
                  lineHeight:'40px'}} onClick={()=>{this.setState({isShow:true})}} >设计理念</span>
                  <span style={{width:'50%',textAlign:'center',lineHeight:'40px',borderBottom:this.state.isShow?'':'1px solid #cccccc', color:this.state.isShow?'':'#ccc'
                
                }} onClick={()=>{this.setState({isShow:false})}}>施工团队</span>
                </div> 
               {
                   this.state.isShow? <DesigConcept />:<ConstructionTeam />    
                  
               }
            </>
        )
    }
}
