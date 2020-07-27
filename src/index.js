import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 导入store
import store from './store'
import { Provider } from 'react-redux'

//  antd 国际化
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale-provider/zh_CN';

import {
  BrowserRouter as Router
} from "react-router-dom"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ConfigProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
