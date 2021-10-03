import React, { Component } from "react";
import {NavLink} from "react-router-dom";

function Navigation(){
    return(
        <nav >
            <ul>
                <li>
                    <NavLink exact to="/technologies/">
                        <b>Technologies</b>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sports/">
                        <b>Sports</b>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation