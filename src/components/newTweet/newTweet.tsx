import React from 'react';
import './newTweet.css';

export const NewTweet: React.FC = () => {
  return (
    <div className='tweet-container'>
      <img className='tweet-profile-picture' src="https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png" alt="Profile avatar" />
      <div className='tweet-align'>
        <textarea>What's happening?</textarea>
      </div>
      <button>Tweet</button>
    </div>
  );
};