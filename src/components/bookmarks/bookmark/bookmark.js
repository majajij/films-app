import React from "react";
import classes from "./bookmark.module.scss";
import { FiTrash } from "react-icons/fi";
import Button from "react-bootstrap/Button";
const BookMark = (props) => {
  const deleteItem = () => {
    props.clickDelete(props.data.id);
  };
  return (
    <div className={classes.bookmark}>
      <Button
        className={classes.button__delete}
        variant="danger"
        onClick={deleteItem}
      >
        <FiTrash />
      </Button>
      <img className={classes.imgFilms} src={props.data.img}></img>

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
