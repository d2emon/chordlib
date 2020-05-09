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

        <Route path="/add-artist" component={AddArtist} />
        <Route path="/artists/:language/:letter" component={Artists} />
        <Route exact path="/artists/:special" component={Artists} />
        <Route exact path="/artist/:artist" component={Artist} />
        <Route path="/artist/:artist/page/:page" component={ArtistWikiPage} />

        <Route path="/add-album" component={AddAlbum} />
        <Route path="/artist/:artist/add-album" component={AddAlbum} />
        <Route path="/album/:artist/:album" component={Album} />
        <Route exact path="/album/:album" component={Album} />

        <Route path="/add-song" component={AddSong} />
        <Route path="/song/:song" component={Song} />
      </Col>
    </Row>
  </Container>
);

export default ChordLib;
