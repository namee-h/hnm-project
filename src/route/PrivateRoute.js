import React from "react";
import UserInfo from "../page/UserInfo";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <UserInfo /> : <Navigate to="/login" />;
};

export default PrivateRoute;
