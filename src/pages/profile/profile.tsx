import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Tweet } from "../../components/tweet/tweet";
import './profile.css';
import { FbTweet } from '../../data/firebase/models/tweet';
import { TweetFirebase } from '../../data/firebase/tweet';
import { FbUser } from '../../data/firebase/models/user';
import { MdLocationOn } from 'react-icons/md';
import { MdLocationOff } from 'react-icons/md';

export const Profile: React.FC = () => {

  const [tweets, setTweets] = useState<FbTweet[]>([]);

  const [tweetsLiked, setTweetsLiked] = useState<FbTweet[]>([]);

  const [user, setUser] = useState<FbUser | null>(null);

  const [isTweetTab, setIsTweetTab] = useState<boolean>(true);

  const [isLocation, setIsLocation] = useState<boolean>(true);

  const [isLocationAllowed, setIsLocationAllowed] = useState<boolean>(true);

  useEffect(() => {
    const currentUserJson = localStorage.getItem('currentUser');

    if (currentUserJson) {
      const currentUser = new FbUser(JSON.parse(currentUserJson));

      setUser(currentUser);
    }

    getTweetList();
    getGeolocation();
    getLikedTweetList();
  }, []);

  const handleTabChange = (isTweetTab: boolean) => {
    setIsTweetTab(isTweetTab);
  }

  async function getTweetList(): Promise<void> {
    const list = await TweetFirebase.getAllFromCurrentUser();

    if (list && list.length) {
      setTweets(list);
    }

    // TODO: Get tweets liked by current user
  }

  async function getLikedTweetList(): Promise<void> {
    const list = await TweetFirebase.getAllLikedByCurrentUser();

    if (list && list.length) {
      setTweetsLiked(list);
    }

    // TODO: Get tweets liked by current user
  }

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setIsLocationAllowed(true);
        localStorage.getItem('isLocation') === 'true' ? setIsLocation(true) : setIsLocation(false);
      }, () => {
        setIsLocationAllowed(false);
      })
    }
  }

  const handleLocationChange = () => {
    localStorage.setItem('isLocation', String(!isLocation));
    setIsLocation(!isLocation);
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
        <div className='profile-location-icon'>
          Geolocation: 
          {isLocationAllowed ? (isLocation ? <MdLocationOn className='location-active' onClick={handleLocationChange}/> : <MdLocationOff className='location-off' onClick={handleLocationChange}/>) : <MdLocationOn className='location-non-allowed' />}
        </div>
        </div>
      </div>
      <div className='profile-tabs'>
        <div className={'profile-tab ' + (isTweetTab ? 'active' : '')} onClick={() => handleTabChange(true)}>Tweet</div>
        <div className={'profile-tab ' + (!isTweetTab ? 'active' : '')} onClick={() => handleTabChange(false)}>Like</div>
      </div>
      <div className='profile-tweet-wrapper'>
        {
          isTweetTab ? tweets.map(tweet => <Tweet key={tweet.uid} tweet={tweet} />) : tweetsLiked.map(tweet => <Tweet key={tweet.uid} tweet={tweet} />)
        }
      </div>
    </div>
  );
}