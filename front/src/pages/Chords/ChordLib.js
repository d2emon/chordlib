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
        <Route path="/chords/artists/:language/:letter" component={Artists} />
        <Route exact path="/chords/artists/:special" component={Artists} />
        <Route path="/chords/add-artist" component={AddArtist} />
        <Route path="/chords/add-album" component={AddAlbum} />
        <Route path="/chords/artist/:artist/add-album" component={AddAlbum} />
        <Route exact path="/chords/artist/:artist" component={Artist} />
        <Route path="/chords/album/:artist/:album" component={Album} />
        <Route exact path="/chords/album/:album" component={Album} />
        <Route path="/chords/song/:song" component={Song} />
        <Route path="/chords/add-song" component={AddSong} />
      </Col>
    </Row>
  </Container>
);

export default ChordLib;
