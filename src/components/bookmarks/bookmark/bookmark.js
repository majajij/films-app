import React, { useState, useContext } from "react";
import classes from "./bookmark.module.scss";
import { FiTrash } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import ModalConfirm from "../../../shared/modalConfirm";
import UpdateContext from "../../../context/context";

const BookMark = (props) => {
  const [modeShow, setModelShow] = useState(false);
  const context = useContext(UpdateContext);
  const deleteItem = () => {
    setModelShow(true);
  };
  const closeClick = () => {
    setModelShow(false);
  };

  const saveClick = (e) => {
    context.delete(props.data.id);
    setModelShow(false);
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
      <ModalConfirm
        show={modeShow}
        msg={`Are you sure, you want to delete ( ${props.data.name} ) from bookmarks ?`}
        close={closeClick}
        save={saveClick}
        action={"Delete"}
      />
    </div>
  );
};

export default BookMark;
