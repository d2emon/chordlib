import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import {
    Container,
    Row,
    Col,

    Navbar,
    NavbarBrand,
} from 'reactstrap';
import Home from '../Home';
import Main from '../Main';
import Alphabet from "../../containers/Alphabet";
import Artists from "../../containers/Artists";
import AddArtist from "../../containers/AddArtist";
import Artist from "../Artist";
import Album from "../Album";
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
                                <Route path="/artists/:lang/:letter" component={Artists} />
                                <Route path="/artists/other" component={Artists} />
                                <Route path="/artists/num" component={Artists} />
                                <Route path="/artists/all" component={Artists} />
                                <Route path="/add-artist" component={AddArtist} />
                                <Route path="/artist/:artist" component={Artist}/>
                                <Route path="/album/:album" component={Album} />
                                <Route path="/song/:song" component={Artist} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
