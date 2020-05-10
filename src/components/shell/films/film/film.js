import React from "react";
import classes from "./film.module.scss";

const Film = (props) => {
  return (
    <div className={classes.film}>
      <div>
        <img
          style={{ height: "20vh", width: "100%", borderRadius: "20px" }}
          src={props.film.img}
          className="image-header"
        ></img>
        {/* <div class="dropdown ">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">
              Action
            </button>
            <button class="dropdown-item" type="button">
              Another action
            </button>
            <button class="dropdown-item" type="button">
              Something else here
            </button>
          </div>
        </div> */}
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
