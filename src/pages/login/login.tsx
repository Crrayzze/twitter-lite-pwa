import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthFirebase } from '../../data/firebase/auth';


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
      console.log(user);
      navigate('/');
    }
  }

  return (
    <div className="form-container">
      <div className="login-form">
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleLoginFormSubmit}>
          <input className="form-input" name="email" type="email" placeholder="Email" required />
          <input className="form-input" name="password" type="password" placeholder="Password" required />
          <button className="form-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}