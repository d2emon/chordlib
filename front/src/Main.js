import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Nav,
    NavItem,
    NavLink,
    Jumbotron,
    Button
} from 'reactstrap';

import logo from "./logo.svg";

function list_alphabet(first, last) {
    let letters = [];
    for (let l = first.charCodeAt(0); l < last.charCodeAt(0); l++) {
        letters.push(String.fromCharCode(l));
    }
    return letters;
}

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            russian: list_alphabet('А', 'Я'),
            english: list_alphabet('A', 'Z'),
            isOpen: false
        };
    }

    render () {
        return (
            <Jumbotron>
                <Nav>
                    { this.state.russian.map((value, index) => <NavItem key={index}>
                        <NavLink href={"/artists/ru/" + value}>{value}</NavLink>
                    </NavItem>)}
                </Nav>
                <Nav>
                    { this.state.english.map((value, index) => <NavItem key={index}>
                        <NavLink href={"/artists/en/" + value}>{value}</NavLink>
                    </NavItem>)}
                </Nav>
                <Nav>
                    <NavItem><NavLink href="/home">#</NavLink></NavItem>
                    <NavItem><NavLink href="/artists/other">Разные песни</NavLink></NavItem>
                    <NavItem><NavLink href="/artists/num">#</NavLink></NavItem>
                    <NavItem><NavLink href="/artists/all">Все</NavLink></NavItem>
                </Nav>
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
            </Jumbotron>
        );
    }
}

export default Home;
