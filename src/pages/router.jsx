import  { Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Notifications } from './notifications/notifications';
import { Profile } from './profile/profile';
import React from 'react';
import { PrivateRoute } from '../hoc/privateRoute';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path='/notifications' element={<PrivateRoute />}>
        <Route path="/notifications" element={<Notifications />} />
      </Route>
      <Route path='/profile' element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}