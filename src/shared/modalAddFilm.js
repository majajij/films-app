import React, { useState } from "react";
import classes from "./modalAddFilm.module.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ModalAdd(props) {
  const [formData, setFormData] = useState({
    id: (props.dataToModify && props.dataToModify.id) || "",
    isFav: (props.dataToModify && props.dataToModify.isFav) || "",
    name: (props.dataToModify && props.dataToModify.name) || "",
    img: (props.dataToModify && props.dataToModify.img) || "",
    genres: (props.dataToModify && props.dataToModify.genres) || "",
    releaseDate: (props.dataToModify && props.dataToModify.releaseDate) || "",
    director: (props.dataToModify && props.dataToModify.director) || "",
    description: (props.dataToModify && props.dataToModify.description) || "",
    ratting: (props.dataToModify && props.dataToModify.ratting) || "",
    reviews: (props.dataToModify && props.dataToModify.reviews) || "",
    Country: (props.dataToModify && props.dataToModify.Country) || "",
    Language: (props.dataToModify && props.dataToModify.Language) || "",
    Runtime: (props.dataToModify && props.dataToModify.Runtime) || "",
  });
  const handelChangeAdd = (name) => (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };
  const handelSubmit = (e) => {
    props.onSubmitHandler(formData);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.action} Movie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={classes.modalDiv__content}>
          <Container>
            <Row>
              <Col>
                <label>Image URL</label>
                <input
                  value={formData.img}
                  onChange={handelChangeAdd("img")}
                  required
                  className="form-control m-2"
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Movie Title</label>
                <input
                  value={formData.name}
                  onChange={handelChangeAdd("name")}
                  required
                  className="form-control m-2"
                  type="text"
                />
              </Col>
              <Col>
                <label>Your Rating</label>
                <input
                  className="form-control m-2"
                  value={formData.ratting}
                  onChange={handelChangeAdd("ratting")}
                  required
                  type="number"
                  step="0.1"
                  max="10"
                  min="1"
                  name="rating"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Director</label>
                <input
                  value={formData.director}
                  onChange={handelChangeAdd("director")}
                  required
                  className="form-control m-2"
                  type="text"
                />
              </Col>
              <Col>
                <label>Country</label>
                <input
                  value={formData.Country}
                  onChange={handelChangeAdd("Country")}
                  required
                  className="form-control m-2"
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Language</label>
                <input
                  value={formData.Language}
                  onChange={handelChangeAdd("Language")}
                  required
                  className="form-control m-2"
                  type="text"
                />
              </Col>
              <Col>
                <label>Genres</label>
                <input
                  value={formData.genres}
                  onChange={handelChangeAdd("genres")}
                  required
                  className="form-control m-2"
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label>ReleaseDate</label>
                <input
                  value={formData.releaseDate}
                  onChange={handelChangeAdd("releaseDate")}
                  required
                  className="form-control m-2"
                  type="text"
                />
              </Col>
              <Col>
                <label>Runtime</label>
                <input
                  value={formData.Runtime}
                  onChange={handelChangeAdd("Runtime")}
                  required
                  className="form-control m-2"
                  type="text"
                />
              </Col>
              <Col>
                <label>Reviews</label>
                <input
                  value={formData.reviews}
                  onChange={handelChangeAdd("reviews")}
                  required
                  className="form-control m-2"
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Description</label>
                <textarea
                  value={formData.description}
                  onChange={handelChangeAdd("description")}
                  required
                  className="form-control m-2"
                  type="text"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button onClick={handelSubmit} variant="success">
          {props.action}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalAdd;
