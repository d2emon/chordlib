import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import Home from './Home';
import Main from './Main';
import './App.css';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar color={"dark"} dark>
                        <NavbarBrand href="/">Аккорды</NavbarBrand>
                    </Navbar>
                    <Route exact path="/" component={Main} />
                    <Route path="/home" component={Home} />
                    <Route path="/artists/:lang/:letter" component={Home} />
                    <Route path="/artists/:group" component={Home} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
