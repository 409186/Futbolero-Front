import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    nombreDeUsuario: "",
    correo: "",
    contrasena: ""
  });
  const { nombreDeUsuario, contrasena, correo} = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      correo,
      contrasena,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div>
      <h1>Registrarse</h1>
      <form onSubmit={handleFormSubmission} className="auth__form">
        <label htmlFor="input-username">Nombre de Usuario</label>
        <Form.Control
          id="input-username"
          type="text"
          name="nombreDeUsuario"
          placeholder="Text"
          value={nombreDeUsuario}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-email">Correo</label>
        <Form.Control
          id="input-email"
          type="email"
          name="correo"
          placeholder="futbol@outlook.com"
          value={correo}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Contraseña</label>
        <Form.Control
          id="input-password"
          type="password"
          name="contrasena"
          placeholder="Password"
          value={contrasena}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

        <Button variant="success" className="button__submit" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
}
