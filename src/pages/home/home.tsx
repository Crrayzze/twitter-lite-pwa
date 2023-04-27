import React from "react";
import { TopBar } from "../../components/topBar/topBar";
import { Tweet } from "../../components/tweet/tweet";
import { NewTweet } from "../../components/newTweet/newTweet";
import { tweetPropsSample } from "../../interfaces/tweetProps";
import "./home.css";

export const Home: React.FC = () => {
  return (
    <div className="page-wrapper">
      <TopBar name="Home" />
      <div className="home">
        <NewTweet />
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