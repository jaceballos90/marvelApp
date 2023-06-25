import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";

const ComicsModals = ({ show, handleClose, personajes, id }) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}>
            <h1>{id.name}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "red" }}>
          <Row>
            <Col>
              {/* <h1>{filtro[0].title}</h1> */}

              <img
                src={`${id.imagen.path}.${id.imagen.extension}`}
                style={{ height: "250px" }}
              />
              <h2>Characters</h2>
              <ul>
                { id.characters.length !== 0 && id.characters.items.map((chara) => (
                  <li>{chara.name}</li>
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
