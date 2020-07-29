import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import axios from 'axios';
import qs from 'qs'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LoginCss from './index.module.css'
import { Modal } from 'antd-mobile';
const alert = Modal.alert;
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alertSuccess: false,
            alertError: false
        }
    }
    componentDidMount() {
        if (localStorage.getItem('user') || sessionStorage.getItem('user')) {
            alert('您已登录!')
            this.props.history.go(-1)
        }
    }
    onFinish = values => {
        console.log(values)
        axios({
            // headers: { 'Content-Type': 'application/json;charset=utf-8' },
            method: 'post',
            url: 'http://47.99.48.212/Decoration/user/login.action',
            data: {
                userNickname: values.username,
                userPassword: values.password
            }
        }).then(res => {
            if (res.data.state) {
                this.setState({
                    alertSuccess: true
                })
                let { username, token } = res.data.data
                values.remember ? localStorage.setItem('user', JSON.stringify({ username, token })) : sessionStorage.setItem('user', JSON.stringify({ username, token }))
                setTimeout(() => {
                    this.props.history.go(-1)
                }, 2000)
            } else {
                this.setState({
                    alertError: true
                })
                setTimeout(() => {
                    this.setState({
                        alertError: false
                    })
                }, 2000)
            }
            console.log(res.data)
        })
    };
    render() {
        let { alertSuccess, alertError } = this.state
        return (
            <div className={LoginCss.main}>
                <div className={LoginCss.header}>
                    <span onClick={() => (
                        this.props.history.push("/")
                    )} className="iconfont icon-home"></span>
                    <p>注册账号</p>
                </div>
                <h1 className={LoginCss.title}>不会装修公司</h1>
                <div className={LoginCss.form}>
                    {alertSuccess ? <Alert message="登录成功,2秒后自动跳转至主页!" type="success" showIcon className={LoginCss.alert} /> : <></>}
                    {alertError ? <Alert message="登录失败,用户名或密码错误!" type="error" showIcon className={LoginCss.alert} /> : <></>}
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "100%" }}>
                                登录
        </Button>
                        </Form.Item>
                        <Form.Item><a href="/register" style={{ textAlign: 'center' }}> 没有账号? 注册</a></Form.Item>

                    </Form>
                </div>
            </div>

        )
    }
}

export default withRouter(Login)