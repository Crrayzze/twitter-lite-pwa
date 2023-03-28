import React from "react";
import "./navigation.css";
import { IoLogoTwitter } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiHome7Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";

export const NavigationBar = () => {
  return (
    <div className="menu-container">
      <div className="navigation">
          <div className="navigation-element">
            <IoLogoTwitter color="var(--white)" />
          </div>
          <div className="navigation-element">
            <RiHome7Line color="var(--white)" />
            Home
          </div>
          <div className="navigation-element">
            <IoMdNotificationsOutline color="var(--white)" />
            Notifications
          </div>
          <div className="navigation-element">
            <BsPersonFill color="var(--white)" />
            Profile
          </div>
        <div className="navigation-bottom navigation-element">
            <CgProfile color="var(--white)"/>
        </div>
      </div>
    </div>
  );
}