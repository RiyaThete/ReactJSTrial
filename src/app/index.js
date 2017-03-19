/**
 * Created by riya on 19/2/17.
 */
import React from "react";
import {render} from "react-dom";
import ReactDOM from "react-dom";
import {Router,Route,browserHistory,IndexRoute} from "react-router"
import {Home} from "./components/Home";
import {User} from "./components/User";
import {Header} from "./components/Header";
import {Root} from "./components/Root";
class App extends React.Component {

    constructor() {
        super();
        this.state = {a: ''}
    }

    update() {
        this.setState({
            a: this.a.refs.input.value,
            b: this.refs.b.value
        })
    }

    render() {
        return (
            <div>
                <Input
                    ref={component=>this.a=component}
                    update={this.update.bind(this)}
                    />
                {this.state.a}
                <input
                    ref="b"
                    onChange={this.update.bind(this)}
                    />
                {this.state.b}
                < hr/>
            </div>);
        /*   return (
         <Router history={browserHistory}>
         <Route path={"/"} component={Root}>
         <IndexRoute component={Home}/>
         <Route path={"home"} component={Home}/>
         <Route path={"user/:id"} component={User}/>
         </Route>
         <Route path={"home-single"} component={Home}/>
         </Router>
         );*/
    }

}

class Input extends React.Component {

    render() {
        return (<input onChange={this.props.update} ref="input"></input>);
        /*   return (
         <Router history={browserHistory}>
         <Route path={"/"} component={Root}>
         <IndexRoute component={Home}/>
         <Route path={"home"} component={Home}/>
         <Route path={"user/:id"} component={User}/>
         </Route>
         <Route path={"home-single"} component={Home}/>
         </Router>
         );*/
    }

}

render(<App/>, window.document.getElementById("app"));