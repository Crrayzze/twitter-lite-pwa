import React, { useState, useEffect } from "react";
import "./onlineChecker.css";
import { RiWifiOffLine } from "react-icons/ri";


export const OnlineChecker: React.FC = () => {

  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('offline', () => {
      setIsOnline(false);
    });
    window.addEventListener('online', () => {
      setIsOnline(true);
    });
  }, [isOnline])

  return (
    <div>
      { !isOnline && 
        <div className="offline-wrapper">
          <RiWifiOffLine color="var(--white)" size={25} style={{ background: 'transparent' }}/>
          <h1 className="offline-text">You are currently offline. Activate your data or connect to Wifi to update your feed and post new tweets</h1>
        </div>
      }
    </div>
  );
}