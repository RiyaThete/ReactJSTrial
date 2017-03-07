/**
 * Created by riya on 19/2/17.
 */
import React from "react";
import {Link} from "react-router"

export const Header = (props)=> {

    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to="/home" activeStyle={{color:"red"}}>Home</Link></li>
                        <li><Link to="/user/4" activeClassName={"active"}>User</Link></li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

