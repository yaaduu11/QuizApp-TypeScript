import React from 'react';
import signIn_bg from '../assets/sign_in_bg.jpg';
import './sign_in_.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate()

  const joinClick=() =>{
     navigate('/rules')
  }

  return (
    <div className="image-container">
      <img src={signIn_bg} alt="background" style={{
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
      }} />
      <div className="text-overlay">
        <h1 className='main-text'>
          <span>Join Now</span><br/>
          <span>&</span><br/>
          <span>Test Your IQ</span>
        </h1>
      </div>
      <div className="button-container">
        <button onClick={()=>joinClick()}>Join</button>
      </div>
    </div>
  );
};

export default SignIn;