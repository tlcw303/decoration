import React, { Component } from 'react'
import Navigation from "../components/Navigation"
import MyRouter from "../components/common/MyRouter"

export default class Index extends Component {

    render() {

        return (
            <div>
                <Navigation></Navigation>
                <MyRouter router={this.props.childrens} ></MyRouter>
            </div>
        )
    }
    componentDidMount() {
        // console.log(this.props, "aaa")
    }
}
