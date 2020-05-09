import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../../components/Header';
import config from '../../config';
import ChordLib from '../Chords/ChordLib';
import Home from '../Chords/Home';
import Main from '../Main';
import Other from '../Other';

import 'font-awesome/css/font-awesome.css';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header title={config.title} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/home" component={Home} />
        <Route path="/chords" component={ChordLib} />
        <Route path="/artists" component={ChordLib} />
        <Route path="/artist" component={ChordLib} />
        <Route path="/song" component={ChordLib} />
        <Route component={Other} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
