import axios from "axios";
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function EquiposPage(){

    const [nombre, setNombre] = useState({});
    const [imagen, setImagen] = useState({});

      function handleSubmit(event) {
        /*
          Previene el comportamiento default de los
          formularios el cual recarga el sitio
        */
        event.preventDefault();
        // Aquí puedes usar values para enviar la información
        axios.post(`${process.env.REACT_APP_SERVER_URL}/perfil/equipos`, {nombre, imagen})
        .then( datos => {
          console.log("Datos =>", datos)
        })
        .catch( error => console.log("Este es el error =>", error))
      }
      function handleChange(evt) {
        /*
          evt.target es el elemento que ejecuto el evento
          name identifica el input y value describe el valor actual
        */
        const { target } = evt;
        const { name, value } = target;
        /*
          Este snippet:
          1. Clona el estado actual
          2. Reemplaza solo el valor del
             input que ejecutó el evento
        */
        const newValues = {
          ...values,
          [name]: value,
        };
        // Sincroniza el estado de nuevo
        setValues(newValues);
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
                value={values.nombreDelEquipo}
                onChange={handleChange}
              />
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Logo del Equipo</Form.Label>
                    <Form.Control
                    type="file"
                    name="imagenLogo"
                    value={values.imagenLogo}
                    onChange={handleChange}/>
                </Form.Group>
              <Button variant="success" type="submit">Agregar Equipo</Button>
            </form>
        </div>
      );
}