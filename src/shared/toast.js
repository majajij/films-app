import React from "react";
import classes from "./toast.module.scss";
import Toast from "react-bootstrap/Toast";

function ToastAlert(props) {

  let alertType = "";
  
  switch(props.action) {
    case "Success":
      alertType = classes.toast_success
      break;
    case "Warning":
      alertType = classes.toast_warning
      break;
    case "Eror":
      alertType = classes.toast_error
      break;
  } 

  /*props.action == "Success"
  ? classes.toast_success
  : props.action == "Warning"
  ? classes.toast_warning
  : classes.toast_error*/

  return (
    <Toast
      className={alertType}
      onClose={props.close}
      show={props.open}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">{props.title}</strong>
        <small></small>
      </Toast.Header>
      <Toast.Body>{props.msg}</Toast.Body>
    </Toast>
  );
}

export default ToastAlert;
