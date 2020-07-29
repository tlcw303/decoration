import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Alert, Select } from 'antd';
import axios from 'axios';
import qs from 'qs'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import RegisterCss from './index.module.css'
import "../../iconfont/iconfont.css"
const { Option } = Select;

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alertSuccess: false,
            alertError: false,
            userPattern: [1, 1, 1, 1, 1],
            throttling: true
        }
    }
    componentDidMount() {
        if (localStorage.getItem('user') || sessionStorage.getItem('user')) {
            alert('您已登录!')
            this.props.history.replace('/')
        }
    }
    onFinish = values => {
        console.log(values, this.state.userPattern)
        if (this.state.throttling) {
            this.to_register(values);
        }
        this.setState({ throttling: false });
        setTimeout(() => {
            this.setState({ throttling: true });
        }, 2000)

    };
    to_register = (values) => {
        // for (var i in values) {
        //     if (values[i] === undefined) {
        //         values[i] = 0
        //     }
        // }
        axios({
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            method: 'post',
            url: 'http://47.99.48.212/Decoration/user/register.action',
            data: {
                userNickname: values.userNickname,
                userPassword: values.userPassword,
                userName: values.userName,
                userPhone: values.userPhone,
                userAddress: values.userAddress,
                userArea: values.userArea,
                userPattern: JSON.stringify(this.state.userPattern),
            }
        }).then(res => {
            console.log(res.data)
            // if (res.data.state) {
            //     this.setState({
            //         alertSuccess: true
            //     })
            //     values.remember ? localStorage.setItem('user', JSON.stringify(res.data.userInfo)) : sessionStorage.setItem('user', JSON.stringify(res.data.userInfo))
            //     setTimeout(() => {
            //         this.props.history.replace('/')
            //     }, 2000)
            // } else {
            //     this.setState({
            //         alertError: true
            //     })
            //     setTimeout(() => {
            //         this.setState({
            //             alertError: false
            //         })
            //     }, 2000)
            // }
        })
    }
    handleChange = (obj) => {
        let arr = this.state.userPattern;
        arr.splice(Number((Object.keys(obj)[0])), 1, (Object.values(obj)[0]))
        this.setState({
            userPattern: arr
        })
        console.log(this.state.userPattern)
    }
    render() {
        let { alertSuccess, alertError } = this.state
        return (
            <div className={RegisterCss.main}>
                <div className={RegisterCss.header}>
                    <span onClick={() => (
                        this.props.history.push("/")
                    )} className="iconfont icon-home"></span>
                    <p>注册账号</p>
                </div>
                <div className={RegisterCss.form}>
                    {alertSuccess ? <Alert message="注册成功,2秒后自动跳转至主页!" type="success" showIcon className={RegisterCss.alert} /> : <></>}
                    {alertError ? <Alert message="注册失败,该用户名已被注册!" type="error" showIcon className={RegisterCss.alert} /> : <></>}
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="userNickname"
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
                            name="userPassword"
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
                        <Form.Item name="userName">
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="姓名" />
                        </Form.Item>
                        <Form.Item name="userPhone">
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="电话号码" />
                        </Form.Item>
                        <Form.Item name="userAddress">
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="房屋地址" />
                        </Form.Item>
                        <Form.Item name="userArea">
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="房屋面积/m²" />
                        </Form.Item>
                        <Form.Item label="房屋格局" style={{ color: "#cbcbcb" }}>
                            <Select defaultValue={1} style={{ width: "15vw" }} showArrow={false} onChange={(value) => (this.handleChange({ 0: value }))}>
                                <Option value={1}>一室</Option>
                                <Option value={2}>二室</Option>
                                <Option value={3}>三室</Option>
                                <Option value={4}>四室</Option>
                                <Option value={5}>五室</Option>
                                <Option value={6}>六室</Option>
                            </Select>
                            <Select defaultValue={1} style={{ width: "15vw" }} showArrow={false} onChange={(value) => (this.handleChange({ 1: value }))}>
                                <Option value={1}>一厅</Option>
                                <Option value={2}>二厅</Option>
                                <Option value={3}>三厅</Option>
                                <Option value={4}>四厅</Option>
                                <Option value={5}>五厅</Option>
                                <Option value={6}>六厅</Option>
                            </Select>
                            <Select defaultValue={1} style={{ width: "15vw" }} showArrow={false} onChange={(value) => (this.handleChange({ 2: value }))}>
                                <Option value={1}>一厨</Option>
                                <Option value={2}>二厨</Option>
                                <Option value={3}>三厨</Option>
                                <Option value={4}>四厨</Option>
                                <Option value={5}>五厨</Option>
                                <Option value={6}>六厨</Option>
                            </Select>
                            <Select defaultValue={1} style={{ width: "15vw" }} showArrow={false} onChange={(value) => (this.handleChange({ 3: value }))}>
                                <Option value={1}>一卫</Option>
                                <Option value={2}>二卫</Option>
                                <Option value={3}>三卫</Option>
                                <Option value={4}>四卫</Option>
                                <Option value={5}>五卫</Option>
                                <Option value={6}>六卫</Option>
                            </Select>
                            <Select defaultValue={1} style={{ width: "15vw" }} showArrow={false} onChange={(value) => (this.handleChange({ 4: value }))}>
                                <Option value={1}>一阳</Option>
                                <Option value={2}>二阳</Option>
                                <Option value={3}>三阳</Option>
                                <Option value={4}>四阳</Option>
                                <Option value={5}>五阳</Option>
                                <Option value={6}>六阳</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "100%" }}>
                                注册
        </Button>
                        </Form.Item>
                        <Form.Item><a href="/login" style={{ textAlign: 'center' }}> 已有账号? 登录</a></Form.Item>

                    </Form>
                </div>
            </div>

        )
    }
}

export default withRouter(Register)
