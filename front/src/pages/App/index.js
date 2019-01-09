import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
// Components
import Header from '../../components/Header';
// Pages
import Home from '../Chords/Home';
import Main from '../Main';
import ChordLib from '../Chords/ChordLib';
import Other from '../Other';
// Css
import 'font-awesome/css/font-awesome.css';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/home" component={Home} />
        <Route path="/chords" component={ChordLib} />
        <Route path="/artists" component={ChordLib} />
        <Route path="/artist" component={ChordLib} />
        { /*<Route path="/" component={Other} />*/ }
        <Route component={Other} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
