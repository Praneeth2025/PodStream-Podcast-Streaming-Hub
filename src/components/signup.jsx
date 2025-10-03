import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios at the top
import './Login.css'; // Importing the same CSS file for consistency

const Signup = () => {
  const [UserName, SetUserName] = useState("");
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); // State for displaying messages

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!UserName) {
      setMessage("Please enter the username");
    } else if (!email) {
      setMessage("Please enter the email");
    } else if (!password) {
      setMessage("Please enter the password");
    } else if (!confirmPassword) {
      setMessage("Please confirm your password");
    } else if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
    } else {
      // Send data to backend
      try {
        const response = await axios.post(`${window.location.origin}/myapp`, {
          username: UserName,
          password: password,
          email: email // Use the email input from the form
        });
        setMessage(response.data.message);
        
        // Redirect to Login after successful submission
        setTimeout(() => {
          navigate('/zenith-bistro/login'); // Navigate to the Login page
        }, 1000); // Adding delay to show the success message before navigating
      } catch (error) {
        console.error("There was an error!", error);
        setMessage("Error registering user");
      }
    }
  };

  return (
    <div className="login_total"> {/* Added parent div with same class */}
      <div className="login_right">
        <h2>Create Your Account</h2> {/* Changed heading for signup */}
      </div>
      <div className="login_left">
        <h5>Enter your details to sign up</h5> {/* Changed prompt for signup */}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                placeholder="Username"
                value={UserName}
                onChange={(e) => SetUserName(e.target.value)}
                required
              />
            </div>
            <div className="input-data">
              <input
                type="email"
                placeholder="E-mail"
                value={email} // Bind email state to the input
                onChange={(e) => setEmail(e.target.value)} // Update email state on change
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
            <div className="input-data">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="login_button">Sign Up</button>

          {/* Message will be displayed here after submission */}
          {message && <p style={{ color: message.includes('successfully') ? "green" : "red" }}>{message}</p>}
        </form>
        <p>
          Already have an account? 
          <button 
            onClick={() => navigate('/zenith-bistro/login')} 
            className="signupok" 
            style={{ marginLeft: '5px' }}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
