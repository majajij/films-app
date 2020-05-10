import React from "react";
import classes from "./bookmark.module.scss";

const BookMark = (props) => {
  return (
    <div className={classes.bookmark}>
      
      <img className= {classes.imgFilms} src={props.data.img}></img>
      
      <div className={classes.bookmarkDetail}>
        <b>{props.data.name}</b>
        <p className="m-0">{props.data.releaseDate}</p>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png"
            width="10px"
            height="10px"
          ></img>
          <strong> {props.data.ratting}</strong> 
          <span>({props.data.reviews})</span>
      </div>
      
    </div>
  );  
};

export default BookMark;
