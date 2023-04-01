import React from "react";
import { Navigate } from "react-router-dom";
import { NavigationBar } from "../components/navigationBar/navigation.jsx";

export const PrivateRoute = () => {
  const isAuthenticated = true; // TODO: implement authentication
  return isAuthenticated ? (
    <NavigationBar />
  ) : (
    <Navigate to="/login" state={{ from: "/" }} />
  );

}