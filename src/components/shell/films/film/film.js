import React from "react";
import classes from "./film.module.scss";
import Badge from "react-bootstrap/Badge";
import { FaBookmark } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";

const Film = (props) => {
  const divClick = () => {
    props.clicked(props.film);
  };

  return (
    <div className={classes.film} onClick={divClick}>
      {props.film.isFav ? (
        <FaBookmark className={classes.badge}/>
      ) :
        <BsBookmarkPlus className={classes.badge} style={{ color : 'gray' }}/>
    
    }
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
