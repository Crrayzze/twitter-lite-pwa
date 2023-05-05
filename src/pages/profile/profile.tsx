import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Tweet } from "../../components/tweet/tweet";
import './profile.css';
import { FbTweet } from '../../data/firebase/models/tweet';
import { TweetFirebase } from '../../data/firebase/tweet';
import { FbUser } from '../../data/firebase/models/user';

export const Profile: React.FC = () => {

  const [tweets, setTweets] = useState<FbTweet[]>([]);

  const [user, setUser] = useState<FbUser | null>(null);

  useEffect(() => {
    const currentUserJson = localStorage.getItem('currentUser');

    if (currentUserJson) {
      const currentUser = new FbUser(JSON.parse(currentUserJson));

      setUser(currentUser);
    }

    getTweetList();
  }, []);

  async function getTweetList(): Promise<void> {
    const list = await TweetFirebase.getAllFromCurrentUser();

    if (list && list.length) {
      setTweets(list);
    }
  }

  return (
    <div className='page-wrapper'>
      <TopBar name="Profile" />
      <div className='profile-wrapper'>
        <div className='profile-banner' style={{ backgroundImage: "url(https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg)" }} />
      </div>
      <div className='profile-info-wrapper'>
        <div className='profile-picture' style={{ backgroundImage: "url(https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg)" }} />
        <div className='profile-name'>
        <div className='profile-displayName'>{ user?.username }</div>
        <div className='profile-username'>@{ user?.email.split('@')[0 ] }</div>
        <div className='profile-description'>{ user?.bio }</div>
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
        {tweets.map(tweet => <Tweet key={tweet.uid} tweet={tweet} />)}
      </div>
    </div>
  );
}