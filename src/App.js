import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "Ernest Hemingway"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    answer: "Au",
  },
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption('');
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-text">{questions[currentQuestionIndex].question}</div>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option) => (
              <div key={option} className="option">
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </div>
            ))}
          </div>
          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
