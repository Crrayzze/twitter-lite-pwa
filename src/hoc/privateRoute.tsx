import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { NavigationBar } from "../components/navigationBar/navigation";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [])

  // user hasn't been verified
  if (user === undefined) {
    return <></>;
  }

  // user has been verified but isn't connected
  if (!user) {
    return <Navigate to="/login" />;
  }

  // user has been verified and is connected
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};