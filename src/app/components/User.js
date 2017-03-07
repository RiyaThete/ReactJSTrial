/**
 * Created by riya on 20/2/17.
 */
import React from "react";
import {browserHistory} from "react-router"

import {Header} from "./Header";

export class User extends React.Component {

    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div>
                User page
                <h3>User id: {this.props.params.id}</h3>
                <button className="btn btn-primary" onClick={this.onNavigateHome}>Go Home</button>
            </div>
        )
    }
}