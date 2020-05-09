import React from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Alphabet from '../../modules/alphabet';
import Home from './Home';
import Artists from './Artist/Artists';
import AddArtist from './Artist/AddArtist';
import AddAlbum from './Album/AddAlbum';
import AddSong from './Song/AddSong';
import ArtistWikiPage from './Artist/ArtistWikiPage';
import Artist from './Artist/Artist';
import Album from './Album/Album';
import Song from './Song/Song';

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
        <Route path="/artist/:artist/page/:page" component={ArtistWikiPage} />
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
