import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Jugadores(){
    const [values, setValues] = useState({
        nombreDelEquipo: "",
        imagenLogo: "",
      });
      function handleSubmit(event) {
        /*
          Previene el comportamiento default de los
          formularios el cual recarga el sitio
        */
        event.preventDefault();
        // Aquí puedes usar values para enviar la información
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
                <h1>Resgitro de Equipo</h1>
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

export default Jugadores