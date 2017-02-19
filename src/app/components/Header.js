/**
 * Created by riya on 19/2/17.
 */
import React from "react";

export const Header = (props)=> {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.initialHomeLink}</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};
