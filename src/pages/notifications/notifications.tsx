import React from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Notification } from '../../components/notification/notification';
import "./notifications.css"

export const Notifications: React.FC = () => {
  return (
    <div className='page-wrapper'>
      <TopBar name="Notifications" />
      <div className='notification'>
        <Notification name='John Doe' tweetId={8}/>
      </div>
    </div>
  );
}