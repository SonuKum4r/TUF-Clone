import React from 'react';
import './Login.css'
import { MdOutlineCancel } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import GoogleButton from 'react-google-button'
import { FaEnvelope } from 'react-icons/fa';

const LoginForm = ({ setShow }) => {

  return (
    <div className="login-modal-overlay">
      <div className="login-modal-content" >
        <button onClick={() => setShow(false)} className="login-modal-close"><MdOutlineCancel /></button>
        <h2 className="login-modal-title">Welcome back to</h2>
        <h1 className="login-modal-brand">takeUforward</h1>

        <button className="login-google-login-button">
          <GoogleButton
            type="dark"
          />
        </button>
        <div className="login-divider">Or login with your email</div>

        <div className="login-input-group">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #5d646d',
            borderRadius: '10px',
            padding: '8px',
            backgroundColor: '#fff',
            width: '400px',
            height: '29px',
            color: '#100f0f',
            cursor: 'pointer',
            fontFamily: "Dm Sans",
            alignSelf: 'center',
            textAlign: 'center'
          }}>
            <FaEnvelope style={{ marginRight: '8px', color: '#5d646d' }} />
            <input
              type="email"
              placeholder="john@gmail.com"
              style={{
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                color: '#5d646d',
                flex: 1
              }}
            />
          </div>
        </div>

        <div className="login-input-group">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '10px',
            padding: '8px',
            backgroundColor: '#fff',
            width: '400px',
            border: '1px solid #5d646d',
            height: '29px',
            cursor: 'pointer',
            alignSelf: 'center',
            textAlign: 'center'
          }}>
            <RiLockPasswordLine style={{ marginRight: '8px', color: '#5d646d' }} />
            <input
              type="password"
              placeholder="*"
              style={{
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                color: '#5d646d',
                flex: 1
              }}
            />
          </div>
          <div className="login-forgot-password">Forgot Password?</div>
        </div>



        <button className="login-login-button">Login</button>

        <div className="login-signup-prompt">
          Don't you have an account? <span className="login-create-account">Create account</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;