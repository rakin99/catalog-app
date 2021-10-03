import { Route, Switch } from "react-router";
import React from 'react';
import Sports from './Pages/Sports'
import Technologies from "./Pages/Technologies";


function Content(){
    return(
        <Switch>
            <Route path="/" exact component={Technologies}/>
            <Route path="/technologies" exact component={Technologies}/>
            <Route path="/sports" component={Sports}/>
        </Switch>
    )
}

export default Content