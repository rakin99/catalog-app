import { Route, Switch } from "react-router";
import React from 'react';
import Sports from './Pages/Sports'
import Technologies from "./Pages/Technologies";
import '../scss/Content.scss'


function Content(){
    return(
        <main>
            <Switch>
                <Route path="/" exact component={Technologies}/>
                <Route path="/technologies" exact component={Technologies}/>
                <Route path="/sports" component={Sports}/>
            </Switch>
        </main>
    )
}

export default Content