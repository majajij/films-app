import React, { useState } from "react";
import classes from "./details.module.scss";
import { FiArrowRight } from "react-icons/fi";
import Button from "react-bootstrap/Button";

const Details = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <div
      className={
        show ? classes.details : classes.details + " " + classes.hidden
      }
    >
      <Button className={classes.ArrowRight} onClick={handleClose}>
        <FiArrowRight />
      </Button>
      <div>
        <img src={data.img} />
      </div>
      <div className={classes.card_body}>
        <h4 className="card-title">{data.name}</h4>
        <p className="card-text">{data.description}</p>
        <span className="card-text pr-2">
          Director: <strong>{data.director}</strong>
        </span>
        <span className="card-text pr-2">
          Country: <strong>{data.Country}</strong>
        </span>
        <span className="card-text pr-2">
          Language: <strong>{data.Language}</strong>
        </span>
        <span className="card-text pr-2">
          Runtime: <strong>{data.Runtime}</strong>
        </span>
        <span className="card-text pr-2">
          Genres: <strong>{data.genres}</strong>
        </span>
        <span className="card-text pr-2">
          Ratting: <strong>{data.ratting}</strong>
        </span>
        <span className="card-text pr-2">
          Release date: <strong>{data.releaseDate}</strong>
        </span>
        <span className="card-text pr-2">
          Reviews: <strong>{data.reviews}</strong>
        </span>
      </div>
    </div>
  );
};

export default Details;

const data = {
  name: "Parasite",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._AC_SL1178_.jpg",
  genres: "Comedy | Drama | Thriller",
  releaseDate: "7 February 2020",
  director: "Bong Joon Ho",
  description:
    "The Kims - mother and father Chung-sook and Ki-taek, and their young adult offspring, son Ki-woo and daughter Ki-jung - are a poor family living in a shabby and cramped half basement apartment in a busy lower working className commercial district of Seoul",
  ratting: 8.6,
  reviews: 396631,
  Country: "South Korea",
  Language: "Korean",
  Runtime: "132 min",
};
