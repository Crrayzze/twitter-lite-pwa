import React from 'react';
import { TopBar } from '../../components/topBar/topBar';

export const Profile: React.FC = () => {
  return (
    <div className='page-wrapper'>
      <TopBar name="Profile" />
    </div>
  );
}