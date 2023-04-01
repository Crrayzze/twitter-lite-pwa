import React from "react";
import { Sample } from "../../components/sample/sample";
import { TopBar } from "../../components/topBar/topBar";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <TopBar name="Home" />
      <div className="home">
        <Sample />
      </div>
    </div>
  );
}