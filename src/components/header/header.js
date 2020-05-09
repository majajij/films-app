import React from "react";
import classes from "./header.module.scss";

const Header = (props) => {
  return (
    <div>
      <nav
        className="navbar"
        style={{
          backgroundColor: "#24252b",
          height: "8vh",
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

const Films = [
  {
    name: "Parasite",
    img:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    genres: "Comedy | Drama | Thriller",
    releaseDate: "7 February 2020",
    director: "Bong Joon Ho",
    description:
      "The Kims - mother and father Chung-sook and Ki-taek, and their young adult offspring, son Ki-woo and daughter Ki-jung - are a poor family living in a shabby and cramped half basement apartment in a busy lower working class commercial district of Seoul",
    ratting: 8.6,
    reviews: 396631,
    Country: "South Korea",
    Language: "Korean",
    Runtime: "132 min",
  },
];
