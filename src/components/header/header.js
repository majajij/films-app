import React, { useState } from "react";
import { FcAddImage } from "react-icons/fc";
import classes from "./header.module.scss";
import ModalAdd from "../../shared/modalAddFilm";

const Header = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const shearchHandeler = (e) => props.change(e.target.value);
  const submitHandeler = (e) => props.addFilmHandler(e);
  // const fData = {
  //   id: Math.random() * 1000000,
  //   name: "Gangster squad",
  //   img:
  //     "http://cdn29.us1.fansshare.com/images/gangstersquad/gangster-squad-ver-xlrg-54313192.jpg",
  //   genres: "Comedy | Drama | Thriller",
  //   releaseDate: "7 February 2020",
  //   director: "Bong Joon Ho",
  //   description:
  //     "The Kims - mother and father Chung-sook and Ki-taek, and their young adult offspring, son Ki-woo and daughter Ki-jung - are a poor family living in a shabby and cramped half basement apartment in a busy lower working class commercial district of Seoul",
  //   ratting: 8.6,
  //   reviews: 396631,
  //   Country: "South Korea",
  //   Language: "Korean",
  //   Runtime: "132 min",
  //   isFav: false,
  // };
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
