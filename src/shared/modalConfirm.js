import React, { useState } from "react";
//import classes from "./modalConfirm.module.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalConfirm = (props) => {
  
    return (
      <>
      
        <Modal show={props.show} onHide={props.close}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.msg}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.close} >
              Close
            </Button>
            <Button variant="primary" onClick={props.save}>
              {props.action}
            </Button>
          </Modal.Footer>
        </Modal>

      </>
    );
  }

  export default ModalConfirm;