import React from 'react';
import home_bg from '../assets/home_bg.jpg';
import './home_.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  const gameBtn=()=>{
    navigate('/game')
  }

  return (
    <div>
      <img
        src={home_bg}
        alt="background"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div className="rules-container">
        <h1 className="rules-title">Game Rules</h1>
        <div className="rules-box">
          <ul className="rules-list">
            <li>The game is a math quiz</li>
            <li>Each question has four options. Choose one answer</li>
            <li>You have 5 seconds to solve each question</li>
            <li>Your score is displayed in the top-right corner</li>
            <li>You’ll be notified if your answer is correct or wrong</li>
            <li>After 5 seconds, the question will automatically move to the next one</li>
            <li>If you click "Skip," your score will decrease by 1 point</li>
            <li>The total playtime is 60 seconds</li>
          </ul>
        </div>
        <button className="start-button" onClick={()=>gameBtn()}>Start</button>
      </div>
    </div>
  );
};

export default Home;
