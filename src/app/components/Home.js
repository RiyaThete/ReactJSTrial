/**
 * Created by riya on 19/2/17.
 */
import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.age,
            status: 1,
            newHomeLink: props.oldHomeLink
        };

        setTimeout(()=> {
            this.setState(
                {status: 99}
            )
        }, 3000);
    }

    makeOld() {
        this.setState(
            {
                age: this.state.age + 2
            }
        );
    }

    changeHomeLink() {
        this.props.changeHomeLink(this.state.newHomeLink)
    }

    updateTextBoxValue(event) {
        this.setState({
            newHomeLink: event.target.value
        });
    }

    render() {
        var title = "Home";
        return (
            <div>
                <p>In a New Component {title}</p>

                <div>Name {this.props.name}</div>
                <div>Age {this.state.age}</div>
                <div>Status {this.state.status}</div>
                <button className="btn btn-primary" onClick={this.makeOld.bind(this)}> Increase Age</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greet}> Greet</button>
                <hr/>
                <input type="text" value={this.state.newHomeLink} onChange={(event)=>{this.updateTextBoxValue(event)}}/>
                <button className="btn btn-primary" onClick={this.changeHomeLink.bind(this)}> Change Home Link
                </button>
            </div>

        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    oldHomeLink: React.PropTypes.string,
    age: React.PropTypes.number,
    greet: React.PropTypes.func,
    changeHomeLink: React.PropTypes.func
};