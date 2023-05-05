import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthFirebase } from '../../data/firebase/auth';
import { Link } from "react-router-dom";
import "./login.css";
import { IoLogoTwitter } from 'react-icons/io';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  async function handleLoginFormSubmit(e: any) {
    e.preventDefault(); // avoid reload

    // get form inputs value
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());

    const email: string = formJson.email as string;
    const password: string = formJson.password as string;

    // authenticate with given credentials
    const user = await AuthFirebase.login(email, password);

    if (user) {
      localStorage.setItem('currentUser', user.toJson());
      navigate('/');
    }
  }

  return (
    <div className="form-container">
      <div className="login-form">
        <div className="title-wrapper">
          <IoLogoTwitter color="var(--white)" size={32} style={{ background: 'transparent', marginTop: '2px' }}/>
          <h1 className="form-title">Login</h1>
        </div>
        <form onSubmit={handleLoginFormSubmit}>
          <input className="form-input" name="email" type="email" placeholder="Email" required />
          <input className="form-input" name="password" type="password" placeholder="Password" required />
          <button className="form-button" type="submit">Login</button>
          <p className="register-text">
            <span className='register-int'>Don't have an account ? </span>
            <Link to={'/register'}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}