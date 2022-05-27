import axios from "axios";
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'

export default function EquiposPage(){

    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");

    const navigate = useNavigate()

      function handleSubmit(e) {
        e.preventDefault();
        
        axios.post(`${process.env.REACT_APP_SERVER_URL}/perfil/equipos`, {nombreDelEquipo: nombre, imagenLogo: imagen})
        // axios.post(`http://localhost:5005/perfil/equipos`, {nombreDelEquipo: nombre, imagenLogo: imagen})
        .then( datos => {
          navigate("/equipos")
        })
        .catch( error => console.log("Este es el error =>", error))
      }
      
      return (
        <div>
            <center>
                <h1>Registro de Equipo</h1>
            </center>
            <form onSubmit={handleSubmit} className="auth__form">
              <Form.Label htmlFor="email">Nombre Del Equipo</Form.Label>
              <Form.Control
                id="nombreEquipo"
                name="nombreDelEquipo"
                type="text"
                value={nombre}
                onChange={ (event) => setNombre(event.target.value)}
              />
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Logo del Equipo</Form.Label>
                    <Form.Control
                    type="text"
                    name="imagenLogo"
                    value={imagen}
                    onChange={(event) => setImagen(event.target.value)}/>
                </Form.Group>
              <Button variant="success" type="submit">Agregar Equipo</Button>
            </form>
        </div>
      );
}