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
import AddAlbum from '../../pages/AddAlbum';
import AddSong from '../../pages/AddSong';
import Artist from '../../pages/Artist';
import Album from '../../pages/Album';
import Song from '../../pages/Song';
// Css
import 'font-awesome/css/font-awesome.css';
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
                                <Route path="/add-album" component={AddAlbum} />
                                <Route path="/artist/:artist/add-album" component={AddAlbum} />
                                <Route exact path="/artist/:artist" component={Artist}/>
                                <Route path="/album/:artist/:album" component={Album} />
                                <Route exact path="/album/:album" component={Album} />
                                <Route path="/song/:song" component={Song} />
                                <Route path="/add-song" component={AddSong} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
