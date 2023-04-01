import React from "react";
import "./topBar.css";

export const TopBar = (prop) => {
  return (
    <div className="topBar-container">
      {prop.name}
    </div>
  )
};