import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";


const Navbar = (props) => {
  return (
    <nav>

      <div>
        <Link to={PATHS.HOMEPAGE} className="nav__projectName">
          Futbolero
        </Link>
        {props.user && (
          <>
            <Link to={PATHS.FORMEQUIPO} className="nav__projectName">
              AgregarEquipo
            </Link>
            <Link to={PATHS.EQUIPOS} className="nav__projectName">
              Equipos
            </Link>
            <Link to={PATHS.PARTIDOS} className="nav__projectName">
              Partidos
            </Link>
          </>
        )}
      </div>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Registrarse
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Iniciar Sesión
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
