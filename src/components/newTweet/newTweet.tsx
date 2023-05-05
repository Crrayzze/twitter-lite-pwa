import React, { useState, useEffect } from 'react';
import './newTweet.css';
import AddressAPI from "../../data/API/addressApi"
import { TweetFirebase } from '../../data/firebase/tweet';

export const NewTweet: React.FC<{ newTweet: Function }> = (props) => {

  const [text, setText] = useState<string>('');
  const [coordinates, setCoordinates] = useState({latitude: 0, longitude: 0});
  const addressApi: AddressAPI = new AddressAPI()

  const getGeolocation =  () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setCoordinates({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        })
      })
    }
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }

  const handleSubmit = async () => {
    if (text.length > 0) {
      let pos: any = coordinates
      if (coordinates.latitude !== 0 && coordinates.longitude !== 0)
        pos = await addressApi.getAddressByCoordinates(coordinates.latitude, coordinates.longitude)

      // TODO: Use call to send the tweet
      const localisation = pos ? pos.city : '';
      const tweet = await TweetFirebase.post(text, localisation);

      if (tweet) {
        props.newTweet(tweet);
        setText('')
      }
    }
  }

  useEffect(() => {
    getGeolocation();
  }, []);

  return (
    <div className='tweet-container'>
      <img
        className='tweet-profile-picture'
        src="https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png"
        alt="Profile avatar" />
      <div className='tweet-align'>
        <textarea
          rows={5}
          className="new-tweet-textarea"
          placeholder="What's happening?"
          value={text}
          onChange={handleTextChange} />
      <button className='new-tweet-button' onClick={handleSubmit}>Tweet</button>
      </div>
    </div>
  );
};