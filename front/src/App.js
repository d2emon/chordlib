import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Jumbotron,
    Button
} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
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
                <Navbar color={"dark"} dark fixed>
                    <NavbarBrand href="/">Аккорды</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse dark isOpen={this.state.isOpen} navbar>
                        <h1 className="App-title"><img src={logo} className="App-logo" alt="logo" /> Welcome to React</h1>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <h1>Welcome to React</h1>
                    <p>
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>
                        <Button
                            bsStyle="success"
                            bsSize="large"
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
