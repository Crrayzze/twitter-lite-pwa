import React from "react";
import { Navigate } from "react-router-dom";
import { NavigationBar } from "../components/navigationBar/navigation";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
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
};