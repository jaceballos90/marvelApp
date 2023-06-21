import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";

const ComicsModals = ({ show, handleClose, personajes, id = 82967 }) => {
  const filtro = personajes.filter((pers) => pers.id == id);

  const characters = filtro[0].characters.items;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}>
            <h1>{filtro[0].name}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "red" }}>
          <Row>
            <Col>
              <h1>{filtro[0].title}</h1>

              <img
                src={`${filtro[0].thumbnail.path}.${filtro[0].thumbnail.extension}`}
                style={{ height: "250px" }}
              />
              <h2>Characters</h2>
              <ul>
                {characters.map((peli) => (
                  <li>{peli.name}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ComicsModals;
