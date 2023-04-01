import './App.css';
import React from 'react';
import { Router } from './pages/router';
import { NavigationBar } from './components/navigationBar/navigation';

function App() {
  return (
    <div className='app-base'>
      <Router />
    </div>
  );
}

export default App;
