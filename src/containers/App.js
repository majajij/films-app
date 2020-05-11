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

  render() {
    return (
      <div className={calsses.App}>
        <Header />
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
