import React from "react";
import classes from "./details.module.scss";

const Details = () => {
  return (
    <div className={classes.details}>
      <div>
        <img src={data.img} />
      </div>
      <div className="card-body">
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
    "https://cdn2.webmanagercenter.com/wmc/wp-content/uploads/2019/11/cine-film-coreen-parasite.jpg",
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
