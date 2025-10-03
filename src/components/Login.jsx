import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${window.location.origin}/api/login`, {
        username,
        password,
      });
      
      if (response.status === 200) {
        setMessage(response.data.message); // Set success message
        setTimeout(() => {
          navigate('/zenith-bistro/main_page'); // Correct route to navigate to main page
        }, 1000);
      }
    } catch (error) {
      console.error("There was an error!", error);
      setMessage(error.response?.data.message || 'Error logging in');
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/zenith-bistro/signup'); // Navigate to signup page
  };

  return (
    <div className="login_total">
      <div className="login_right">
        <h2>Welcome Back...</h2>
      </div>
      <div className="login_left">
        <h5>Enter your credentials to login</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input 
                type="text"
                value={username}
                placeholder="UserName"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-data">
              <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="login_button">Login</button>
          {message && (
            <p style={{ color: message.includes('successful') ? 'green' : 'red' }}>
              {message}
            </p>
          )}
        </form>
        <p>
          Don't have an account? 
          <button 
            onClick={handleSignUpRedirect} 
            className="signupok" 
            style={{ marginLeft: '5px' }}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
