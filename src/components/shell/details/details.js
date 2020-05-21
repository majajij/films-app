import React from "react";
import classes from "./details.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "react-bootstrap/Button";

const Details = (props) => {
  return (
    <div className={classes.details}>
      <Button className={classes.ArrowRight} onClick={props.detailsHandler}>
        <IoIosCloseCircle style={{ color: "white", fontSize: "18px" }} />
      </Button>
      <div>
        <img src={props.selectedFilm.img} />
      </div>
      <div className={classes.card_body}>
        <h4 className="card-title">{props.selectedFilm.name}</h4>
        <p className="card-text">{props.selectedFilm.description}</p>
        <span className="card-text pr-2">
          Director: <strong>{props.selectedFilm.director}</strong>
        </span>
        <span className="card-text pr-2">
          Country: <strong>{props.selectedFilm.Country}</strong>
        </span>
        <span className="card-text pr-2">
          Language: <strong>{props.selectedFilm.Language}</strong>
        </span>
        <span className="card-text pr-2">
          Runtime: <strong>{props.selectedFilm.Runtime}</strong>
        </span>
        <span className="card-text pr-2">
          Genres: <strong>{props.selectedFilm.genres}</strong>
        </span>
        <span className="card-text pr-2">
          Ratting: <strong>{props.selectedFilm.ratting}</strong>
        </span>
        <span className="card-text pr-2">
          Release date: <strong>{props.selectedFilm.releaseDate}</strong>
        </span>
        <span className="card-text pr-2">
          Reviews: <strong>{props.selectedFilm.reviews}</strong>
        </span>
      </div>
    </div>
  );
};

export default Details;
