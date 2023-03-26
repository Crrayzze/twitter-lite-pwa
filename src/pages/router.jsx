import  { Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Notifications } from './notifications/notifications';
import { Profile } from './profile/profile';
import React from 'react';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}