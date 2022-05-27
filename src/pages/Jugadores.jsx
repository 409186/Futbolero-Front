import React, {useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate, useParams} from 'react-router-dom'

function Jugadores(){
  const [nombre, setNombre] = useState("");
  const [posicion, setPosicion] = useState("");

  const {id} = useParams()
  console.log(id)

  const navigate = useNavigate()

    function handleSubmit(e) {
      e.preventDefault();
      
      axios.post(`${process.env.REACT_APP_SERVER_URL}/equipos/jugadores`, {nombre, posicion, equipoId: id})
      // axios.post(`http://localhost:5005/equipos/jugadores`, {nombre, posicion})
      .then( datos => {
        navigate("/equipos")
      })
      .catch( error => console.log("Este es el error =>", error))
    }
    
    return (
      <div>
          <center>
              <h1>Registro de Jugador</h1>
          </center>
          <form onSubmit={handleSubmit} className="auth__form">
            <Form.Label htmlFor="email">Nombre</Form.Label>
            <Form.Control
              id="nombreEquipo"
              name="nombreDelEquipo"
              type="text"
              value={nombre}
              onChange={ (event) => setNombre(event.target.value)}
            />
              <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Posición</Form.Label>
                  <Form.Control
                  type="text"
                  name="posicion"
                  value={posicion}
                  onChange={(event) => setPosicion(event.target.value)}/>
              </Form.Group>
            <Button variant="success" type="submit">Agregar Jugador</Button>
          </form>
      </div>
    );
}

export default Jugadores