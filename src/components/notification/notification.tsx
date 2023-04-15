import React from 'react';
import "./notification.css";
import { AiFillHeart } from "react-icons/ai";
import { NotificationProps } from '../../interfaces/notificationProps';
import { useLocation, useNavigate, Location, NavigateFunction } from "react-router-dom";

export const Notification: React.FC<NotificationProps> = ({ name, tweetId }) => {

  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  const handleClick = () => {
    const path: string = '/notifications/' + tweetId + '/';
    if (location.pathname !== path) {
      navigate(path);
    }
  }

  return (
    <div className='notification-container' onClick={handleClick}>
      <div className='no-background'>
        <AiFillHeart className='notification-like no-background'/>
      </div>
      <div className='notification-people no-background'>
        {name} liked your tweet
      </div>
    </div>
  )
}