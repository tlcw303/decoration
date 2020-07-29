import React, { Component } from 'react'
import { ActivityIndicator, WingBlank, WhiteSpace, Button } from 'antd-mobile';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
        };

    }
    componentDidMount() {
        this.showToast()
    }
    componentWillUnmount() {
        clearTimeout(this.closeTimer);
    }
    showToast = () => {
        this.setState({ animating: !this.state.animating });
        this.closeTimer = setTimeout(() => {
            this.setState({ animating: !this.state.animating });
        }, 3000);
    }

    render() {
        return (
            <div>
                <div className="toast-container">
                    <WhiteSpace size="xl" />
                    <div className="toast-example">
                        <ActivityIndicator
                            toast
                            text="Loading..."
                            animating={this.state.animating}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
