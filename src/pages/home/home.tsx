import React from "react";
import { Sample } from "../../components/sample/sample";
import { TopBar } from "../../components/topBar/topBar";
import { Tweet } from "../../components/tweet/tweet";
import { tweetPropsSample } from "../../interfaces/tweetProps";
import "./home.css";

export const Home: React.FC = () => {
  return (
    <div className="page-wrapper">
      <TopBar name="Home" />
      <div className="home">
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
        <Tweet {...tweetPropsSample} />
      </div>
    </div>
  );
}