import React from "react";
import classes from "./films.module.scss";
import Film from "./film/film";
import DATA from "../../../FakeDb/data";

const Films = () => {
  const listFilms = DATA.map((e, i) => <Film film={e} key={i} />);
  return <div className={classes.films}>{listFilms}</div>;
};

export default Films;
