import React, { Component } from 'react'
import './App.css';
import router from "./router/index"
import MyRouter from "./components/common/MyRouter"
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MyRouter router={router}></MyRouter>
      </div>
    )
  }
}
