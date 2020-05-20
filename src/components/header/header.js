import React, { useState } from "react";
import { FcAddImage } from "react-icons/fc";
import classes from "./header.module.scss";
import ModalAdd from "../../shared/modalAddFilm";

const Header = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const shearchHandeler = (e) => props.change(e.target.value);
  const submitHandeler = (e) => props.addFilmHandler(e);

  return (
    <div>
      <nav className={classes.nav}>
        <a className={classes.app__title}>filmZapp</a>
        <div className={classes.Actions}>
          <input
            className="form-control m-2"
            type="text"
            placeholder="Type somthing ..."
            onChange={shearchHandeler}
          />

          <FcAddImage
            style={{ fontSize: "3rem", cursor: "pointer" }}
            onClick={() => setModalShow(true)}
          />
          <ModalAdd
            action="Add"
            // dataToModify={fData}
            show={modalShow}
            onHide={() => setModalShow(false)}
            onSubmitHandler={submitHandeler}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
