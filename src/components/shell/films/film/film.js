import React from "react";
import classes from "./film.module.scss";

const Film = (props) => {
  return (
    <div className={classes.film}>
      <div>
        <img src={props.film.img} className={classes.image__header}></img>
      </div>
      <div className="card-description p-2">
        <h5 className="p-1">{props.film.name}</h5>
        <div>
          <span>{props.film.genres}</span>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
            width="10px"
            height="10px"
          ></img>
          <strong> {props.film.ratting}</strong>{" "}
          <span>({props.film.reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default Film;
