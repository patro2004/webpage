// MyComponent.js
import React, { useEffect, useState } from 'react';
import './MyComponent.css';

const MyComponent = () => {
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isRegister, setIsRegister] = useState(true);

  useEffect(() => {
    const Register = () => {
      const submitForm = document.getElementById("submit");
      const registerForm = document.getElementById("Register");
      const buttonBox = document.getElementById("button-box");

      submitForm.style.left = "-400px";
      registerForm.style.left = "50px";
      buttonBox.style.left = "110px";

      setIsRegister(true);
    };

    const Signin = () => {
      const submitForm = document.getElementById("submit");
      const registerForm = document.getElementById("Register");
      const buttonBox = document.getElementById("button-box");

      submitForm.style.left = "50px";
      registerForm.style.left = "450px";
      buttonBox.style.left = "0px";

      setIsRegister(false);
    };

    // Binding functions to the window object to access them in the DOM
    window.Register = Register;
    window.Signin = Signin;
  }, []);

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one special character');
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    const password = document.getElementById("password").value;

    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleUsernameChange = (e) => {
    const username = e.target.value;
    const usernameRegex = /^[a-zA-Z0-9_]{5,}$/;

    if (!usernameRegex.test(username)) {
      setUsernameError('Username must be at least 5 characters long and can only contain letters, numbers, and underscores');
    } else {
      setUsernameError("");
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format. Please use a valid email, e.g., example@gmail.com");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="first">
      <div className="formbox">
        <div className="button">
          <div id="button-box"></div>
          <button type="button" className="btn" onClick={() => window.Signin()}>
            Sign in
          </button>
          <button type="button" className="btn" onClick={() => window.Register()}>
            Register
          </button>
        </div>
        {isRegister ? passwordError && <p style={{ color: "red" }}>{passwordError}</p> : null}
        {isRegister ? confirmPasswordError && <p style={{ color: "red" }}>{confirmPasswordError}</p> : null}
        {usernameError && <p style={{ color: "red" }}>{usernameError}</p>}
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <form id="submit" className="input" style={{ left: isRegister ? '50px' : '-400px' }}>
          <input type="text" className="input-field" placeholder="Username" onChange={handleUsernameChange} />
          <input
            type="password"
            className="input-field"
            id="password"
            placeholder="Enter password"
            onChange={handlePasswordChange}
          />
          {isRegister && (
            <input
              type="password"
              className="input-field"
              placeholder="Confirm password"
              onChange={handleConfirmPasswordChange}
            />
          )}
          <label htmlFor="password"></label>
          <select name="role" id="role">
            <option value="Student">Student</option>
            <option value="Developer">Developer</option>
          </select>
          <button type="submit" className="Submit-btn">
            {isRegister ? 'Submit' : 'Sign in'}
          </button>
        </form>
      
        <form action='/HiMessage' id="Register" className="input" style={{ left: isRegister ? '450px' : '50px' }}>
          <input type="text" className="input-field" placeholder="Username" onChange={handleUsernameChange} />
          <input
            type="password"
            className="input-field"
            id="password"
            placeholder="Enter password"
            onChange={handlePasswordChange}
          />
          {isRegister && (
            <input
              type="password"
              className="input-field"
              placeholder="Confirm password"
              onChange={handleConfirmPasswordChange}
            />
          )}
          <input
            type="email"
            className="input-field"
            placeholder="Enter email-id"
            onChange={handleEmailChange}
          />
          <button type="submit" className="Submit-btn">
            Register
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default MyComponent;
