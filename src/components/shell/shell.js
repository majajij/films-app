import React, { Component } from "react";
import classes from "./shell.module.scss";
import Films from "./films/films";
import Details from "./details/details";
class Shell extends Component {
  state = {
    selectedFilm: {},
    isShow: false,
  };

  render() {
    return (
      <div className={classes.shell}>
        <Films
          filmClicked={(e) => this.setState({ isShow: true, selectedFilm: e })}
          filmsList={this.props.filmsList}
          filmDelete={this.props.deleteFilmClick}
        />
        <Details
          show={this.state.isShow}
          selectedFilm={this.state.selectedFilm}
          detailsHandler={() =>
            this.setState({ isShow: false, selectedFilm: {} })
          }
        />
      </div>
    );
  }
}

export default Shell;
