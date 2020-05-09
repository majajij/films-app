import React, { Component } from "react";
import classes from "./shell.module.scss";
import Films from "./films/films";
import Details from "./details/details";
import DATA from "../../FakeDb/data";
class Shell extends Component {
  render() {
    console.log("dataa", DATA);

    return (
      <div className={classes.shell}>
        <Films />
        <Details />
      </div>
    );
  }
}

export default Shell;
