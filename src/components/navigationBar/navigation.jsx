import React from "react";
import "./navigation.css";
import { IoLogoTwitter } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiHome7Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";

export const NavigationBar = () => {
  return (
    <div className="menu-container">
      <div className="navigation">
          <div className="navigation-element navigation-first-element">
            <IoLogoTwitter color="var(--white)" size={30} style={{ background: 'transparent' }}/>
          </div>
          <div className="navigation-element">
            <RiHome7Line color="var(--white)" size={24} style={{ background: 'transparent' }}/>
            Home
          </div>
          <div className="navigation-element">
            <IoMdNotificationsOutline color="var(--white)" size={24} style={{ background: 'transparent' }}/>
            Notifications
          </div>
          <div className="navigation-element">
            <BsPerson color="var(--white)" size={24} style={{ background: 'transparent' }}/>
            Profile
          </div>
        <div className="navigation-bottom navigation-element">
            <CgProfile color="var(--white)" style={{ background: 'transparent' }}/>
            <div style={{ background: 'transparent'}}>
              <p className="navigation-name">Name</p>
              <p className="navigation-username">@username</p>
            </div>
        </div>
      </div>
    </div>
  );
}