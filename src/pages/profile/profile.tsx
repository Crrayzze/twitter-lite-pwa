import React from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Tweet } from "../../components/tweet/tweet";
import { tweetPropsSample } from "../../interfaces/tweetProps";
import './profile.css';

export const Profile: React.FC = () => {
  return (
    <div className='page-wrapper'>
      <TopBar name="Profile" />
      <div className='profile-wrapper'>
        <div className='profile-banner' style={{ backgroundImage: "url(https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg)" }} />
      </div>
      <div className='profile-info-wrapper'>
        <div className='profile-picture' style={{ backgroundImage: "url(https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg)" }} />
        <div className='profile-name'>
        <div className='profile-displayName'>John Doe </div>
        <div className='profile-username'> @John </div>
        <div className='profile-description'>Bonjour c'est John bienvenu sur mon profile</div>
        <div className='profile-stats'>
          <div className='profile-stats-sub'>
          </div>
          <div className='profile-stats-sub'>
          </div>
        </div>
        </div>
      </div>
      <div className='profile-tabs'>
        <div className='profile-tab active'>Tweet</div>
        <div className='profile-tab'>Like</div>
      </div>
      <div className='profile-tweet-wrapper'>
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