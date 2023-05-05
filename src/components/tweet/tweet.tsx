import React, { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import './tweet.css';
import { FbTweet } from '../../data/firebase/models/tweet';
import { auth } from '../../firebase';

export const Tweet: React.FC<{ tweet: FbTweet }> = (props) => {

  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      setIsLiked(props.tweet.likes.includes(user.uid));
    }

  }, [props]);

  const handleLike = async () => {
    const isUpdated = await props.tweet.toggleLike();

    if (isUpdated) {
      setIsLiked(!isLiked);
    }
  }

  return (
    <div className='tweet-container'>
        <img className='tweet-profile-picture' src={ "https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png" } alt="Profile avatar" />
      <div className='tweet-align'>
        <div className='tweet-top'>
          <p className='tweet-author'>{props.tweet.created_by_data ? props.tweet.created_by_data.username : props.tweet.created_by}</p>
          <p className='tweet-info'>•</p>
          <p className='tweet-info'>{new Date(props.tweet.created_at).toLocaleString()}</p>
        </div>
        <p className='tweet-text'>{props.tweet.text}</p>
        <div className='tweet-bottom'>
          <div className='tweet-button-wrapper'>
            {
            isLiked ? <AiFillHeart className='tweet-info tweet-icon tweet-liked' onClick={handleLike}/>
            : <AiOutlineHeart className='tweet-info tweet-icon' onClick={handleLike}/>
            }

            <p className='tweet-info'>{props.tweet.likes.length}</p>
          </div>
          <p className='tweet-info'>•</p>
          <p className='tweet-info'>{props.tweet.localisation}</p>
        </div>
      </div>
    </div>
  );
};