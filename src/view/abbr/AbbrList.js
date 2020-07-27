import React, { Component } from 'react';
import { Viewer } from 'photo-sphere-viewer';
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import axios from "axios"
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import Al from "../../css/abbrlist.module.css"

class AbbrList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pic: [
                "/images/1.jpg", "/images/2.jpg", "/images/3.jpg",
                "/images/4.jpg", "/images/5.jpg", "/images/1.jpg"
            ]
        }
    }

    componentDidMount() {
        this.v = new Viewer({
            container: document.querySelector("#viewer"),
            panorama: this.state.pic[this.props.match.params.id],
            navbar: [
                'autorotate',
                'fullscreen'
            ]
        });
        axios("http://localhost:3001/abbr")
            .then(res => (
                this.setState({
                    list: res.data
                })
            ))
    }
    render() {
        let { list } = this.state
        let { id } = this.props.match.params
        return (
            <div className={Al.box}>
                <div className={Al.header}>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => (this.props.history.go(-1))}
                    >{list.length > 0 && list[id].title}</NavBar>
                </div>
                <div>
                    <div style={{ width: "100%", height: "100vh" }} id="viewer"></div>

                </div>
            </div>
        );
    }
}

export default withRouter(AbbrList);