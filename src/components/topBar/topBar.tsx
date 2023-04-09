import React from "react";
import "./topBar.css";

interface TopBarProps {
  name: string;
}

export const TopBar: React.FC<TopBarProps> = ({ name }) => {
  return (
    <div className="topBar-container">
      {name}
    </div>
  )
};