import React from "react";
import "./navigation.css";
import { IoLogoTwitter } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiHome7Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

export const NavigationBar = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigationClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  }

  return (
    <div className="menu-container">
      <div className="navigation">
          <div className="navigation-element navigation-first-element" onClick={() => handleNavigationClick("/")}>
            <IoLogoTwitter color="var(--white)" size={30} style={{ background: 'transparent' }}/>
          </div>
          <div className="navigation-element" onClick={() => handleNavigationClick("/")}>
            <RiHome7Line color="var(--white)" size={24} style={{ background: 'transparent' }}/>
            <div className="navigation-label">
              Home
            </div>
          </div>
          <div className="navigation-element" onClick={() => handleNavigationClick("/notifications")}>
            <IoMdNotificationsOutline color="var(--white)" size={24} style={{ background: 'transparent' }}/>
            <div className="navigation-label">
              Notifications
            </div>
          </div>
          <div className="navigation-element" onClick={() => handleNavigationClick("/profile")}>
            <BsPerson color="var(--white)" size={24} style={{ background: 'transparent' }}/>
            <div className="navigation-label">
              Profile
            </div>
          </div>
        <div className="navigation-bottom navigation-element">
            <CgProfile color="var(--white)" size={30} style={{ background: 'transparent' }}/>
            <div className="navigation-label">
              <p className="navigation-name">Name</p>
              <p className="navigation-username">@username</p>
            </div> 
        </div>
      </div>
    </div>
  );
}