/**
 * Created by riya on 19/2/17.
 */
import React from "react";
import {render} from "react-dom";
import {Router,Route,browserHistory,IndexRoute} from "react-router"
import {Home} from "./components/Home";
import {User} from "./components/User";
import {Header} from "./components/Header";
import {Root} from "./components/Root";
class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            initialHomeLink: "Link 1"
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

    //render() {
    //    return (
    //        <Router history={browserHistory}>
    //            <Route path={"/"} component={Root}>
    //                <Route path={"user"} component={User}/>
    //                <Route path={"home"} component={Home}/>
    //            </Route>
    //            <Route path={"home-single"} component={Home}/>
    //        </Router>
    //    );
    //}

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
                        <Home name="Ria"
                              age={12}
                              greet={this.onGreet}
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