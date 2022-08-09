import {Navigate,Outlet} from "react-router";
import React from "react";

function PrivateRoute({isLogged}) {
  return isLogged ? <Outlet/> : <Navigate to="/"/>
}
export default PrivateRoute