import React, {useState} from "react";
import classes from "./toast.module.scss";
import Toast from 'react-bootstrap/Toast';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ToastAlert(props) {
 
    return (
        <Row>
        <Col xs={6}>
            <Toast className={props.action == 'Success' ? classes.toast_success : props.action == 'Warning' ? classes.toast_warning : classes.toast_error} onClose={props.close} show={props.open} delay={5000} autohide>
            <Toast.Header>
                <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
                />
                <strong className="mr-auto">{props.title}</strong>
                <small></small>
            </Toast.Header>
            <Toast.Body>{props.msg}</Toast.Body>
            </Toast>
        </Col>
        </Row>
    );

  }
  
export default ToastAlert;