import React from 'react';
import { TweetProps } from '../../interfaces/tweetProps';
import { AiOutlineHeart } from 'react-icons/ai';
import './tweet.css';

export const Tweet: React.FC<TweetProps> = (tweet) => {
  return (
    <div className='tweet-container'>
        <img className='tweet-profile-picture' src={ tweet.authorImage } alt="Profile avatar" />
      <div className='tweet-align'>
        <div className='tweet-top'>
          <p className='tweet-author'>{tweet.author}</p>
          <p className='tweet-info'>•</p>
          <p className='tweet-info'>{tweet.date}</p>
        </div>
        <p className='tweet-text'>{tweet.text}</p>
        <div className='tweet-bottom'>
          <div className='tweet-button-wrapper'>
            <AiOutlineHeart className='tweet-info tweet-icon' />
            <p className='tweet-info'>{tweet.likes}</p>
          </div>
          <p className='tweet-info'>•</p>
          <p className='tweet-info'>{tweet.localization}</p>
        </div>
      </div>
    </div>
  );
};