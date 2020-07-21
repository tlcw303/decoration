import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom"

class MyRouter extends Component {
    render() {
        return (
            <Switch>
                {
                    this.props.router.map(v => (

                        <Route path={v.path} render={() => <v.component {...v} />} exact={v.exact} key={v.path} ></Route>
                    ))
                }
                <Redirect to={"/error"} from="*"></Redirect>
            </Switch>
        );
    }
    componentDidMount() {
        // console.log(this.props.router, 'aaaa')
    }
}

export default MyRouter;