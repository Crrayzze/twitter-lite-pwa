import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthFirebase } from "../../data/firebase/auth";
import { Link } from "react-router-dom";
import "./register.css";
import { IoLogoTwitter } from 'react-icons/io';

export const Register: React.FC = () => {
  const navigate = useNavigate();

  async function handleregisterFormSubmit(e: any) {
    e.preventDefault(); // avoid reload

    // get form inputs value
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());

    const username: string = formJson.username as string;
    const email: string = formJson.email as string;
    const password: string = formJson.password as string;
    const confirm_password: string = formJson.confirm_password as string;

    // check password matching
    if (password !== confirm_password) {
      return;
    }

    // authenticate with given credentials
    const user = await AuthFirebase.register(username, email, password);

    if (user) {
      localStorage.setItem('currentUser', user.toJson());
      navigate('/');
    }

  }

  return (
    <div className="form-container">
      <div className="register-form">
        <div className="title-wrapper">
          <IoLogoTwitter color="var(--white)" size={32} style={{ background: 'transparent', marginTop: '2px' }}/>
          <h1 className="form-title">Register</h1>
        </div>
        <form onSubmit={handleregisterFormSubmit}>
          <input className="form-input" name="username" type="text" placeholder="Username" required />
          <input className="form-input" name="email" type="email" placeholder="Email" required />
          <input className="form-input" name="password" type="password" placeholder="Password" required />
          <input className="form-input" name="confirm_password" type="password" placeholder="Confirm password" required />
          <button className="form-button" type="submit">Register</button>
          <p className="login-text">
            <span className='login-int'>Already have an account ? </span>
            <Link to={'/login'}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}