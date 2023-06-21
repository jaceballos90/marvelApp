import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./barraNavegacion.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Icons } from "../Icons";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../hooks/useForm";
import { useMarvelContext } from "../context/useMarvelContext";

const BarraNavegacion = () => {
  const { filterCharacters, filterComics } = useMarvelContext();
  
  const location = useLocation();

  const handleSearch = (value) => {
    if (location.pathname.includes("characters")) {
      filterCharacters(value);
    }
    if (location.pathname.includes("comics")) {
      filterComics(value);
    }
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "red" }}>
      <Container fluid>
        <Navbar.Brand href="/" className="marvel">
          MARVEL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Form className="d-flex" style={{ marginRight: "200px" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Button variant="dark">
              <Icons icon={faMagnifyingGlass} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNavegacion;
