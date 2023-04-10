import { Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Notifications } from './notifications/notifications';
import { Profile } from './profile/profile';
import React from 'react';
import { PrivateRoute } from '../hoc/privateRoute';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>} />
      <Route path="/notifications" element={
        <PrivateRoute>
          <Notifications />
        </PrivateRoute>} />
      <Route path="/profile" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>} />
    </Routes>
  );
}
