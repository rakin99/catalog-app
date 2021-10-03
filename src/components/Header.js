import React, { Component } from "react";
import Navigation from "./Navigation";

function Header(){
    return(
        <header style={{background:'yellow'}}>
            <h1>Header</h1>
            <Navigation />
        </header>
    )
}

export default Header