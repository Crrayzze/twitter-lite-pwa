import React from 'react';
import './App.css';
import { Router } from './pages/router';
import { OnlineChecker } from './components/onlineChecker/onlineChecker';

function App() {
  return (
    <div>
      <OnlineChecker />
      <div className="app-base">
        <Router />
      </div>
    </div>
  );
}

export default App;
