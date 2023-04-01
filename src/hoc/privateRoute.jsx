import React from "react";
import { Navigate } from "react-router-dom";
import { NavigationBar } from "../components/navigationBar/navigation.jsx";

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return (
      <>
        <NavigationBar />
        {children}
      </>
    );
  }
  return <Navigate to="/login" />;
}