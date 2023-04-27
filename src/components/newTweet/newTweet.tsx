import React, { useState, useEffect } from 'react';
import './newTweet.css';

export const NewTweet: React.FC = () => {

  const [text, setText] = useState<string>('');
  const [coordinates, setCoordinates] = useState({latitude: 0, longitude: 0});

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

  const handleSubmit =  () => {
    if (text.length > 0) {
      console.log('Tweet: ', text);
      console.log("coordinates: ", coordinates);
      // TODO: Use call to send the tweet
      setText('')
    }
  }

  useEffect(() => {
    getGeolocation()
  }, [coordinates]);

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