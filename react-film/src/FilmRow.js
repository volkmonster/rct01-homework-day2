import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from './Fave';

class FilmRow extends Component {

  handleDetailsClick = (e) => {
    console.log('handleDetailsClick', e);
  }

  render() {
    const releaseDate = new Date(this.props.film.release_date);

    return (
      <div className="film-row" onClick={this.handleDetailsClick} >
        <FilmPoster path={this.props.film.poster_path} />

        <div className="film-summary">
          <Fave />
          <h1>{this.props.film.title}</h1>
          <p>{releaseDate.getFullYear()}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
