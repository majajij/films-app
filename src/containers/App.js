import React, { Component } from "react";
import calsses from "./App.module.scss";
import Header from "../components/header/header";
import Bookmarks from "../components/bookmarks/bookmarks";
import Shell from "../components/shell/shell";
import DATA from "../FakeDb/data";
import ToastAlert from "../shared/toast";
import UpdateContext from "../context/context";
import bookMarkFilmContext from "../context/filmsContext";

class App extends Component {
  state = {
    films: DATA,
    selectedFilm: null,
    favoritFilms: DATA.filter((e) => e.isFav),
    filtredFilms: DATA,
    toast: false,
    toastMsg: "",
    toastTitle: "",
    toastAction: "", //accepted values [Success, Warning, Error]
  };

  deleteFavFilmHandler = (e) => {
    const updatedFilms = this.state.films.map((m) =>
      m.id === e ? { ...m, isFav: false } : { ...m }
    );
    console.log(updatedFilms);

    this.setState({
      films: updatedFilms,
      filtredFilms: updatedFilms,
      favoritFilms: updatedFilms.filter((e) => e.isFav),
      toast: true,
      toastTitle: "Deleted Bookmarks",
      toastMsg: "Film Deleted From Bookmarks Successfully",
      toastAction: "Success"
    });
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
    this.setState({ 
      films: dataToSend,
      filtredFilms: dataToSend,
      toast: true,
      toastTitle: "Add",
      toastMsg: "Film Added successfully",
      toastAction: "Success"
    });
  };

  filmSearchHandler = (e) => {
    if (e !== "") {
      const searchWord = e;
      const updatedFilms = this.state.films
        .map((m) => ({ ...m, name: m.name.toLowerCase() }))
        .filter((f) => f.name.indexOf(searchWord) != -1)
        .map((m) => ({ ...m, name: m.name.toUpperCase() }));
      this.setState({ filtredFilms: updatedFilms });
    } else {
      this.setState({ filtredFilms: DATA });
    }
  };
  favoritHandler = (e) => {
    const id = e.idfilm;
    const action = e.action;
    const updatedFilms = this.state.films.map((m) =>
      m.id === id ? { ...m, isFav: action } : { ...m }
    );
    this.setState({
      films: updatedFilms,
      filtredFilms: updatedFilms,
      favoritFilms: updatedFilms.filter((e) => e.isFav),
    });
  };
  filmDeleteHandler = (e) => {
    const idFIlm = e;
    const updatedFilms = this.state.films.filter((f) => f.id !== idFIlm);
    this.setState({ 
      films: updatedFilms,
      filtredFilms: updatedFilms,
      favoritFilms: updatedFilms.filter((e) => e.isFav),
      toast: true,
      toastTitle: "Delete",
      toastMsg: "Film Deleted successfully",
      toastAction: "Success"
    });
  };
  editFilmHandler = (e) => {
    console.log(e);

    const updateFilm = this.state.films.map((f) =>
      f.id === e.id ? { ...e } : f
    );
    this.setState({
      filtredFilms: updateFilm,
      films: updateFilm,
      favoritFilms: updateFilm.filter((e) => e.isFav),
      toast: true,
      toastTitle: "Update",
      toastMsg: "Film Updated successfully",
      toastAction: "Success",
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className={calsses.App}>
        <ToastAlert
          open={this.state.toast}
          close={() =>
            this.setState({
              toast: false,
            })
          }
          title={this.state.toastTitle}
          msg={this.state.toastMsg}
          action={this.state.toastAction}
        />
        <Header
          change={this.filmSearchHandler}
          addFilmHandler={this.addFilmHandler}
        />

        <bookMarkFilmContext.Provider
          value={{
            filmsList: this.state.filtredFilms,
            deleteFilm: this.filmDeleteHandler,
            editfilmClick: this.editFilmHandler,
            favoritClicked: this.favoritHandler,
          }}
        >
          <Shell />
        </bookMarkFilmContext.Provider>

        <UpdateContext.Provider
          value={{
            delete: this.deleteFavFilmHandler,
          }}
        >
          <Bookmarks filmsList={this.state.favoritFilms} />
        </UpdateContext.Provider>
      </div>
    );
  }
}

export default App;
