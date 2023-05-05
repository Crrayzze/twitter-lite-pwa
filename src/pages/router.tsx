import { Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Notifications } from './notifications/notifications';
import { Profile } from './profile/profile';
import React from 'react';
import { PrivateRoute } from '../hoc/privateRoute';
import { NotifiedTweet } from './notifiedTweet/notifiedTweet';
import { Register } from './register/register';
import { Login } from './login/login';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={
          <Login />} />
      <Route path="/register" element={
          <Register />} />
      <Route path="/" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>} />
      <Route path="/notifications" element={
        <PrivateRoute>
          <Notifications />
        </PrivateRoute>} />
      <Route path="/notifications/:id" element={
        <PrivateRoute>
          <NotifiedTweet />
        </PrivateRoute>} />
      <Route path="/profile" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>} />
    </Routes>
  );
}
