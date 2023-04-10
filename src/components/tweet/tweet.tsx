import React from 'react';
import { TweetProps } from '../../interfaces/tweetProps';

export const Tweet: React.FC<TweetProps> = (tweet) => {
  return (
    <div>
      <div>
        <p>PP</p>
      </div>
      <div>
        <div>
          <p>{tweet.author}</p>
          <p>{tweet.date}</p>
        </div>
        <p>{tweet.text}</p>
        <div>
          <p>{tweet.likes}</p>
          <p>{tweet.localization}</p>
        </div>
      </div>
    </div>
  );
};