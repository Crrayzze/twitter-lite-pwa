import React from 'react';
import "./notification.css";
import { AiFillHeart } from "react-icons/ai";

export const Notification: React.FC = () => {

  // const getName = () => {
  //   return "Notification";
  // }

  return (
    <div className='notification-container'>
      <div>
        <AiFillHeart className='notification-like'/>
      </div>
      <div className='notification-people'>
        people liked your tweet
      </div>
    </div>
  )
}