import React, { Component } from "react";
import calsses from "./App.module.scss";
import Header from "../components/header/header";
import Bookmarks from "../components/bookmarks/bookmarks";
import Shell from "../components/shell/shell";
import DATA from "../FakeDb/data";

class App extends Component {
  state = {
    films: DATA,
    selectedFilm: null,
  };

  filmDeleteFavHandler = (e) => {
    const updatedFilms = this.state.films.filter((f) => f.id !== e);
    this.setState({ films: updatedFilms });
  };
  addFilmHandler = (e) => {
    const newFilm = { ...e, id: Math.random(), isFav: false };
    const dataToSend = [...this.state.films, newFilm];
    this.setState({ films: dataToSend });
  };
  filmSearchHandler = (e) => {
    if (e !== "") {
      const searchInput = e;
      const updatedFilms = this.state.films.filter((f) =>
        f.name.includes(searchInput)
      );
      this.setState({ films: updatedFilms });
    } else {
      this.setState({ films: DATA });
    }
  };

  render() {
    return (
      <div className={calsses.App}>
        <Header
          change={this.filmSearchHandler}
          addFilmHandler={this.addFilmHandler}
        />
        <Shell filmsList={this.state.films} />
        <Bookmarks
          click={this.filmDeleteFavHandler}
          filmsList={this.state.films}
        />
      </div>
    );
  }
}

export default App;
