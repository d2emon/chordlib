import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
} from 'reactstrap';
// Components
import Alphabet from '../../modules/alphabet';
// Pages
import Home from '../../pages/Home';
import Main from '../../pages/Main';
import Artists from '../../pages/Artists';
import AddArtist from '../../pages/AddArtist';
import Artist from '../../pages/Artist';
import Album from '../../pages/Album';
// Css
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
                                <Route path="/artists/:language/:letter" component={Artists} />
                                <Route exact path="/artists/:special" component={Artists} />
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
