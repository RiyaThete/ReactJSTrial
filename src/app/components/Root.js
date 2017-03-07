/**
 * Created by riya on 20/2/17.
 */
import React from "react";

import {Header} from "./Header";

export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}