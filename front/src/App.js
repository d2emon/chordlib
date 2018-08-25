import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {
    Container,
    Row,
    Col,

    Navbar,
    NavbarBrand,
} from 'reactstrap';
import Home from './Home';
import Main from './Main';
import Alphabet from "./components/Alphabet";
import Artist from "./components/Artist";
import './App.css';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar color={"dark"} dark>
                        <NavbarBrand href="/">Аккорды</NavbarBrand>
                    </Navbar>
                    <Container>
                        <Row>
                            <Col><Alphabet /></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Route exact path="/" component={Main} />
                                <Route path="/home" component={Home} />
                                <Route path="/artists/:lang/:letter" component={Artist} />
                                <Route path="/artists/other" component={Artist} />
                                <Route path="/artists/num" component={Artist} />
                                <Route path="/artists/all" component={Artist} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
