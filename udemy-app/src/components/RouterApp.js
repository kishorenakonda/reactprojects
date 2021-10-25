import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Card from "./Card";

function RouterApp() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar></Navbar>

                {/* With Help of Switch only the first match route is been loaded */}
                <Switch>
                    {/* <Route exact path="/" component={Home}></Route> */}
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>

                    {/* Route Parameters */}
                    <Route path="/card/:user" component={Card}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default RouterApp;