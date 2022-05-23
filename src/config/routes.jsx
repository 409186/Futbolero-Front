import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import EquiposPage from "../pages/Equipos";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";
import Partidos from "../pages/Partidos";
import Perfil from "../pages/Perfil";

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
      path: PATHS.EQUIPO, 
      element: <EquiposPage />
    },
    {
      path: "/partidos", 
      element: <Partidos />
    },
    {
      path: "/perfil", 
      element: <Perfil />
    }
  ];
};

export default routes;
