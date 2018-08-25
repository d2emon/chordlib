import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Jumbotron,
    Button
} from 'reactstrap';

function list_alphabet(first, last) {
    let letters = [];
    for (let l = first.charCodeAt(0); l < last.charCodeAt(0); l++) {
        letters.push(String.fromCharCode(l));
    }
    return letters;
}

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            russian: list_alphabet('А', 'Я'),
            english: list_alphabet('A', 'Z'),
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="App">
                <Navbar color={"dark"} dark>
                    <NavbarBrand href="/">Аккорды</NavbarBrand>
                </Navbar>
                <Jumbotron>
                    <Nav>
                        { this.state.russian.map((value, index) => <NavItem key={index}>
                            <NavLink href={"/ru/" + value}>{value}</NavLink>
                        </NavItem>)}
                    </Nav>
                    <Nav>
                        { this.state.english.map((value, index) => <NavItem key={index}>
                            <NavLink href={"/en/" + value}>{value}</NavLink>
                        </NavItem>)}
                    </Nav>
                    <Nav>
                        <NavItem><NavLink href="/other">Разные песни</NavLink></NavItem>
                        <NavItem><NavLink href="/num">#</NavLink></NavItem>
                        <NavItem><NavLink href="/all">Все</NavLink></NavItem>
                    </Nav>
                    <h1><img src={logo} className="App-logo" alt="logo" /> Welcome to React</h1>
                    <p>
                        To get started, edit <code>src/App.js</code> and save to reload.
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
            </div>
        );
    }
}

export default App;
