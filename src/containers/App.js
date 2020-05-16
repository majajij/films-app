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
    favoritFilms: DATA.filter((e) => e.isFav),
    filtredFilms: DATA,
  };

  deleteFavFilmHandler = (e) => {
    const updatedFilms = this.state.favoritFilms.filter((f) => f.id !== e);
    this.setState({ favoritFilms: updatedFilms });
  };
  addFilmHandler = (e) => {
    const newFilm = {
      ...e,
      id: Math.random(),
      isFav: false,
      img:
        e.img !== ""
          ? e.img
          : "https://www.meghnaddesaiacademy.org/wp-content/uploads/2019/12/no-image-available.jpg",
    };
    const dataToSend = [...this.state.films, newFilm];
    this.setState({ films: dataToSend, filtredFilms: dataToSend });
  };
  filmSearchHandler = (e) => {
    if (e !== "") {
      const updatedFilms = this.state.films.filter(
        (f) => f.name.indexOf(e) != -1
      );
      this.setState({ filtredFilms: updatedFilms });
    } else {
      this.setState({ filtredFilms: DATA });
    }
  };

  render() {
    return (
      <div className={calsses.App}>
        <Header
          change={this.filmSearchHandler}
          addFilmHandler={this.addFilmHandler}
        />
        <Shell filmsList={this.state.filtredFilms} />
        <Bookmarks
          click={this.deleteFavFilmHandler}
          filmsList={this.state.favoritFilms}
        />
      </div>
    );
  }
}

export default App;
