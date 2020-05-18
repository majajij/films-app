import React from "react";
import classes from "./films.module.scss";
import Film from "./film/film";

const Films = (props) => {
  /*const filmClicked = (e) => {
    console.log(e);
    props.filmClicked(e);
  };*/
  const listFilms = props.filmsList.map((e, i) => (
    <Film
      clicked={props.filmClicked}
      deleteClicked={props.filmDelete}
      film={e} key={i} 
      editfilm = {props.editfilmClicked}  
    />
  ));
  return <div className={classes.films}>{listFilms}</div>;
};

export default Films;
