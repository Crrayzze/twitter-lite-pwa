import React, { useEffect, useState } from "react";
import "./navigation.css";
import { IoIosLogOut, IoLogoTwitter } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiHome7Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { useLocation, useNavigate, Location, NavigateFunction } from "react-router-dom";
import { AuthFirebase } from "../../data/firebase/auth";
import { FbUser } from "../../data/firebase/models/user";

export const NavigationBar: React.FC = () => {

  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  const [user, setUser] = useState<FbUser | null>(null);

  useEffect(() => {
    const currentUserJson = localStorage.getItem('currentUser');

    if (currentUserJson) {
      const currentUser = new FbUser(JSON.parse(currentUserJson));

      setUser(currentUser);
    }
  }, []);

  const handleNavigationClick = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  }

  const logoutUser = (): void => {
    localStorage.removeItem('currentUser');
    const isLogout = AuthFirebase.logout();
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
          <div className="navigation-element" onClick={() => logoutUser()}>
            <IoIosLogOut color="var(--white)" size={24} style={{ background: 'transparent' }}/>
            <div className="navigation-label">
              Logout
            </div>
          </div>
        <div className="navigation-bottom navigation-element" onClick={() => handleNavigationClick("/profile")}>
            <CgProfile color="var(--white)" size={30} style={{ background: 'transparent' }}/>
            <div className="navigation-label">
              <p className="navigation-name">{ user?.username }</p>
              <p className="navigation-username">@{ user?.email.split('@')[0 ] }</p>
            </div>
        </div>
      </div>
    </div>
  );
}