import React from "react";
import classes from "./header.module.scss";

const Header = (props) => {
  return (
    <div>
      <nav
        className="navbar"
        style={{
          backgroundColor: "#14151c",
          zIndex: "5",
          eight: "8vh",
          boxShadow: "0px 3px 2px 0px #1d1d21a6",
        }}
      >
        <a className="navbar-brand">Films App</a>
        <div className={classes.Actions}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-outline-success my-2 mx-2 my-sm-0">
            Search
          </button>
          <button className="btn btn-outline-primary my-2 my-sm-0">Add</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
