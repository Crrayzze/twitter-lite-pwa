import React from 'react';
import { TopBar } from "../../components/topBar/topBar";
import "./notifiedTweet.css";
import { tweetPropsSample } from "../../interfaces/tweetProps";
import { Tweet } from '../../components/tweet/tweet';
import { useParams } from 'react-router-dom'


export const NotifiedTweet: React.FC = () => {

  const { id } = useParams<{id: string}>();

  // TODO: get tweet by id 

  return (
    <div className='page-wrapper'>
      <TopBar name="Notified Tweet" />
      <div className='notified-tweet'>
        <Tweet {...tweetPropsSample} />
      </div>
    </div>
  );
};
