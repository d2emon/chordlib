import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Jumbotron,
    Button
} from 'reactstrap';
import logo from "./logo.svg";
import CounterContainer from '../../containers/Counter/CounterContainer';
import Todos from '../../components/Todos/Todos';

class Main extends Component {
    render () {
        return (
            <Jumbotron>
                <h1><img src={logo} className="App-logo" alt="logo" /> Welcome to React</h1>
                <p>
                    To get started, edit <code>src/App.js</code> and save to reload. <Link to="/home">Home</Link>
                </p>
                <p>
                    <Button
                        color="success"
                        size="large"
                        href="http://react-bootstrap.github.io/components.html"
                        target="_blank">
                        View React Bootstrap Docs
                    </Button>
                </p>
                <CounterContainer />
                <Todos />
            </Jumbotron>
        );
    }
}

export default Main;
