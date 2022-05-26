import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import EquiposPage from "../pages/formEquipo";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";
import Partidos from "../pages/Partidos";
import Perfil from "../pages/Perfil";
import Jugadores from "../pages/Jugadores";
import Equipos from "../pages/Equipos";
import Detalles from "../pages/Detalles";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
    {
      path: PATHS.FORMEQUIPO, 
      element: <EquiposPage {...props}/>
    },
    {
      path: PATHS.PARTIDOS, 
      element: <Partidos {...props}/>
    },
    {
      path: PATHS.PERFIL, 
      element: <Perfil {...props}/>
    },
    {
      path: PATHS.JUGADORES, 
      element: <Jugadores {...props}/>
    },
    {
      path: PATHS.EQUIPOS,
      element: <Equipos {...props}/>
    },
    {
      path: PATHS.DETALLES,
      element: <Detalles {...props}/>
    }
  ];
};

export default routes;
