import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TMDB from './TMDB';

import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';

class App extends Component {
  render() {

    console.log('TMDB: ', TMDB);
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films} />
        <FilmDetails />
      </div>
    );
  }
}

export default App;
