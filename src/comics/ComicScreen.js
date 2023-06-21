import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./comics.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Button, Row } from "react-bootstrap";
import { useMarvelContext } from "../context/useMarvelContext";
import ComicsModals from "../modals/ComicsModals";
import '../main/main.css'




export const ComicScreen = () => {

  const {filteredComics} = useMarvelContext()
  

  const [resultados, setResultados] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const [id, setId] = useState(82967)
  const [show, setShow] = useState(false);

  useEffect(() => {
    setResultados(filteredComics);
  }, [filteredComics]);



  const handleClose = () => {
    setShow(false);
  } 
  const handleShow = (e) =>{
    
    setId(e.target.value)
    setShow(true);
  } 

 
  
  return (
    <>
      

      
      <div style={{ marginTop: "10px" }}>
        <CardGroup>
          <Row xs={1} md={1} className="g-4">
            {resultados.map((pers) => (
              <Card key={pers.id} style={{ width: "300px" }} className="imagen">
                <Card.Img
                  variant="top"
                  src={`${pers.thumbnail.path}.${pers.thumbnail.extension}`}
                  style={{ height: "300px" }}
                />
                <Card.Footer style={{ backgroundColor: "black" }}></Card.Footer>
                <Card.Body style={{ backgroundColor: "red" }}>
                  <Card.Title style={{ color: "white" }}>
                    {pers.title}
                    
                  </Card.Title>
                  <Card.Title type={"date"} value={pers.dates[0].date}>
                    {" "}
                    publisehd: {pers.dates[0].date}
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button onClick={handleShow} name="prueba" value={pers.id} variant="dark">Details</Button>
                </Card.Body>
                <ComicsModals show={show} handleClose={handleClose} personajes={resultados} id={id} />
              </Card>
            ))}
          </Row>
        </CardGroup >
      </div>
      
    </>
  );
};
