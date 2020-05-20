import React, { useState } from "react";
import classes from "./film.module.scss";
//import Badge from "react-bootstrap/Badge";
import { FaBookmark, FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { BsBookmarkPlus, BsFillEyeFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import ModalConfirm from "../../../../shared/modalConfirm";
import ModalAdd from "../../../../shared/modalAddFilm";

const Film = (props) => {
  //state model modify
  const [modalShow, setModalShow] = useState(false);
  //const shearchHandeler = (e) => props.change(e.target.value);
  const submitHandeler = (e) => props.editfilm(e);
  //state model confirm alert
  const [modeShow, setModelShow] = useState(false);

  const divClick = () => {
    props.clicked(props.film);
  };

  const deleteClick = () => {
    setModelShow(true);
  };

  const closeClick = () => {
    setModelShow(false);
  };

  const saveClick = (e) => {
    //alert(props.film.id);
    props.deleteClicked(props.film.id);
    setModelShow(false);
  };

  const EditClick = () => {
    setModalShow(true);
  };

  return (
    <div className={classes.film}>
      {props.film.isFav ? (
        <FaBookmark className={classes.badge} />
      ) : (
        <BsBookmarkPlus className={classes.badge} style={{ color: "gray" }} />
      )}
      <div>
        <div className={classes.button__actions}>
          <Button
            className={classes.button__view}
            onClick={divClick}
            variant="primary"
          >
            <BsFillEyeFill />
          </Button>

          <Button
            className={classes.button__edit}
            variant="success"
            onClick={EditClick}
          >
            <AiFillEdit />
          </Button>

          <Button
            className={classes.button__delete}
            onClick={deleteClick}
            variant="danger"
          >
            <FaTrash />
          </Button>
        </div>

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

      <ModalConfirm
        show={modeShow}
        msg={`Are you sure, you want to delete ( ${props.film.name} ) ?`}
        close={closeClick}
        save={saveClick}
        action={"Delete"}
      />

      <ModalAdd
        action="Edit"
        dataToModify={props.film}
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSubmitHandler={submitHandeler}
      />
    </div>
  );
};

export default Film;
