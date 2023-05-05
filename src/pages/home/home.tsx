import React, { useEffect, useState } from "react";

import { TopBar } from "../../components/topBar/topBar";
import { Tweet } from "../../components/tweet/tweet";
import { NewTweet } from "../../components/newTweet/newTweet";

import { TweetFirebase } from "../../data/firebase/tweet";
import { FbTweet } from "../../data/firebase/models/tweet";

import "./home.css";

export const Home: React.FC = () => {

  const [tweets, setTweets] = useState<FbTweet[]>([]);

  useEffect(() => {
    getTweetList();
  }, []);

  async function getTweetList(): Promise<void> {
    const list = await TweetFirebase.getAll();

    if (list && list.length) {
      setTweets(list);
    }
  }

  function addNewTweetToList(tweet: FbTweet): void {
    if (tweet) {
      setTweets([ tweet, ...tweets ]);
    }
  }

  return (
    <div className="page-wrapper">
      <TopBar name="Home" />
      <div className="home">
        <NewTweet newTweet={addNewTweetToList} />

        {tweets.map(tweet => <Tweet key={tweet.uid} tweet={tweet} />)}
      </div>
    </div>
  );
}