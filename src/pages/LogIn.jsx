import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div>
      <center>
        <h1>Iniciar Sesion</h1>
      </center>
      <form onSubmit={handleFormSubmission} className="auth__form">
        <label htmlFor="input-username">Correo</label>
        <Form.Control
          id="input-email"
          type="email"
          name="email"
          placeholder="futbol@outlook.com"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Contraseña</label>
        <Form.Control
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
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
          Entrar
        </Button>
      </form>
    </div>
  );
}
