import { useState } from 'react';
import './App.css';
import Questions from './components/Questions';

function App() {
  const QUESTIONS = [
    {
      question: 'What is 5!?',
      answers: ['60', '80', '100', '120'],
      correct: 3,
    },
    {
      question: 'What is the sum of the numbers from 1 to 10?',
      answers: ['10', '55', '110', '49'],
      correct: 1,
    },
    {
      question: 'Who was the first president of the United States?',
      answers: [
        'George Washington',
        'John Adams',
        'John Quincy Adams',
        'Thomas Jefferson',
      ],
      correct: 0,
    },
    {
      question: 'Which city is the most populated city in the USA?',
      answers: ['Boston', 'Los Angles', 'New York', 'Chicage'],
      correct: 2,
    },
    {
      question: 'Which one the most popular according to NPM download trends?',
      answers: ['React', 'Angular', 'VueJs', 'Svelte'],
      correct: 0,
    },
  ];
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  return (
    <div className="container quest-box">
      <div id="app" className="row"></div>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          {index < QUESTIONS.length ? (
            <Questions
              QUESTIONS={QUESTIONS}
              index={index}
              setIndex={setIndex}
              setCorrect={setCorrect}
              correct={correct}
            />
          ) : (
            <div>
              <h1>You have done {correct * 20}% correct!</h1>
              <button
                onClick={() => {
                  setIndex(0);
                  setCorrect(0);
                }}
              >
                Retry
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
