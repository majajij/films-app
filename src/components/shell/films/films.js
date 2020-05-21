import React, { useContext } from "react";
import classes from "./films.module.scss";
import Film from "./film/film";
import bookMarkFilmContext from "../../../context/filmsContext";

const Films = (props) => {
  const context = useContext(bookMarkFilmContext);

  const listFilms = context.filmsList.map((e, i) => (
    <Film clicked={props.filmClicked} film={e} key={i} />
  ));
  return <div className={classes.films}>{listFilms}</div>;
};

export default Films;
