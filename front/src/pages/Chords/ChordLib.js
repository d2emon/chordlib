import React from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
// Components
import Alphabet from '../../modules/alphabet';
// Pages
import Home from './Home';
import Artists from './Artists';
import AddArtist from './AddArtist';
import AddAlbum from './AddAlbum';
import AddSong from './AddSong';
import Artist from './Artist';
import Album from './Album';
import Song from './Song';

const ChordLib = () => (
  <Container>
    <Row>
      <Col><Alphabet /></Col>
    </Row>
    <Row>
      <Col>
        <Route exact path="/chords" component={Home} />
        <Route path="/artists/:language/:letter" component={Artists} />
        <Route exact path="/artists/:special" component={Artists} />
        <Route path="/add-artist" component={AddArtist} />
        <Route path="/add-album" component={AddAlbum} />
        <Route path="/artist/:artist/add-album" component={AddAlbum} />
        <Route exact path="/artist/:artist" component={Artist} />
        <Route path="/album/:artist/:album" component={Album} />
        <Route exact path="/album/:album" component={Album} />
        <Route path="/song/:song" component={Song} />
        <Route path="/add-song" component={AddSong} />
      </Col>
    </Row>
  </Container>
);

export default ChordLib;
