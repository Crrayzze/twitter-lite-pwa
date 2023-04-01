import React from "react";
import { Navigate } from "react-router-dom";
import { NavigationBar } from "../components/navigationBar/navigation";

export const withAuthScreen = (Component) => {
  const AuthenticatedComponent = (props) => {
    const isAuthenticated = false // TODO: check if user is authenticated
    if (isAuthenticated) {
      return (<Component {...props} />)
    } else {
      return <Navigate to="/login" />
    }
  }
  return AuthenticatedComponent
}