import React, { useState } from "react";
import classes from "./header.module.scss";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <div>
      <nav className={classes.nav}>
        <a className={classes.app__title}>Films App</a>
        <div className={classes.Actions}>
          <input
            className="form-control m-2"
            type="text"
            placeholder="Type somthing ..."
          />
          <button
            className="btn btn-outline-primary m-2"
            onClick={() => {
              setShow(!show);
            }}
          >
            Add
          </button>
        </div>
      </nav>
      {/* modal add Film */}
      <div
        className={show ? classes.modal + " " + classes.visible : classes.modal}
      >
        <h2 className={classes.modal__title}>Add new film</h2>
        <div className={classes.modal__content}>
          <label>Movie Title</label>
          <input className="form-control m-2" type="text" />
          <label>Image URL</label>
          <input className="form-control m-2" type="text" />
          <label>Your Rating</label>
          <input
            className="form-control m-2"
            type="number"
            step="1"
            max="10"
            min="1"
            name="rating"
          />
        </div>
        <div className={classes.modal__actions}>
          <button className="btn btn-outline" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn btn-outline-success">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
