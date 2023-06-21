import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './main.css'

export const MainScreen = () => {
  return (
    <Row>
      <Col>
        <NavLink to="/comics">
          <img src="./imagenes/comics.png" alt="imagen hombre araña"
          style={{width: '650px',height: '450px', marginTop: '30px'}}
          className="imagen"
          />
        </NavLink>
      </Col>
      <Col>
        <NavLink to="/characters">
          <img src="./imagenes/carnage.png" alt="imagen hombre araña" 
          style={{width: '650px',height: '450px', marginTop: '30px'}}
          className="imagen"
          />
        </NavLink>

      </Col>
    </Row>
  );
};
