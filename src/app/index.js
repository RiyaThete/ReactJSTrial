/**
 * Created by riya on 19/2/17.
 */
import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
class App extends React.Component {
    constructor(props) {
        "use strict";
        super();
        this.state = {
            initialHomeLink: "UnChanged Link"
        }
    }

    onGreet() {
        alert("Greeting");
    }

    onChangeHomeLink(newName) {
        this.setState(
            {
                initialHomeLink: newName
            }
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header initialHomeLink={this.state.initialHomeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name="Ria" age={12} greet={this.onGreet}
                              changeHomeLink={this.onChangeHomeLink.bind(this)}
                              oldHomeLink={this.state.initialHomeLink}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));