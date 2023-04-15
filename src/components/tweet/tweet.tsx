import React, { useState } from 'react';
import { TweetProps } from '../../interfaces/tweetProps';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import './tweet.css';

export const Tweet: React.FC<TweetProps> = (tweet) => {

  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    console.log('Like');
    setIsLiked(!isLiked);
    // TODO: send like to server
  }

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
            {
            isLiked ? <AiFillHeart className='tweet-info tweet-icon tweet-liked' onClick={handleLike}/>
            : <AiOutlineHeart className='tweet-info tweet-icon' onClick={handleLike}/>
            }
            
            <p className='tweet-info'>{tweet.likes}</p>
          </div>
          <p className='tweet-info'>•</p>
          <p className='tweet-info'>{tweet.localization}</p>
        </div>
      </div>
    </div>
  );
};