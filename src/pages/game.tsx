import React, { useState, useEffect } from 'react';
import home_bg from '../assets/home_bg.jpg';
import './game_.css';

const Game: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(120);
  const [questionTime, setQuestionTime] = useState<number>(20);
  const [question, setQuestion] = useState<string>('');
  const [options, setOptions] = useState<number[]>([]);

  const generateQuestion = (): void => {
    const num1 = Math.floor(Math.random() * 900) + 100;
    const num2 = Math.floor(Math.random() * 900) + 100;
    const num3 = Math.floor(Math.random() * 900) + 100;
    const operations = ['+', '-'];

    const op1 = operations[Math.floor(Math.random() * operations.length)];
    const op2 = operations[Math.floor(Math.random() * operations.length)];

    const expression = `${num1} ${op1} ${num2} ${op2} ${num3}`;
    const correctAnswer = eval(expression); 

    const answers = new Set<number>();
    answers.add(correctAnswer);

    while (answers.size < 4) {
      const randomAnswer = correctAnswer + Math.floor(Math.random() * 20 - 10);
      answers.add(randomAnswer);
    }

    const shuffledOptions = Array.from(answers).sort(() => Math.random() - 0.5);

    setQuestion(expression);
    setOptions(shuffledOptions);
  };

  useEffect(() => {
    const roundTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          alert(`Time's up! Your score is ${score}. Starting a new round.`);
          setScore(0);
          setTimeLeft(120);
          generateQuestion();
          return 120;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(roundTimer);
  }, [score]);

  useEffect(() => {
    const questionTimer = setInterval(() => {
      setQuestionTime((prev) => {
        if (prev <= 1) {
          generateQuestion();
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(questionTimer);
  }, []);

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleOptionClick = (option: number): void => {
    if (option === eval(question)) {
      setScore(score + 1);
    }
    generateQuestion();
    setQuestionTime(20);
  };

  const handleSkip = (): void => {
    if (score > 0) {
      setScore(score - 1);
    }
    generateQuestion();
    setQuestionTime(20);
  };

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
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '20px',
          color: 'white',
          fontSize: '20px',
        }}
      >
        Score: {score}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '32px',
          textAlign: 'center',
        }}
      >
        Total Time: {timeLeft}s
      </div>
      <div
        style={{
          textAlign: 'center',
          marginTop: '20%',
          color: 'white',
          fontSize: '28px',
        }}
      >
        <h2>Question: {question}</h2>
        <span
          style={{
            display: 'inline-block',
            marginLeft: '10px',
            fontSize: '18px',
            color: 'yellow',
          }}
        >
          (Time Left: {questionTime}s)
        </span>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                border: '2px solid white',
                padding: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                fontSize: '20px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              {String.fromCharCode(65 + index)}: {option}
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={handleSkip}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default Game;
