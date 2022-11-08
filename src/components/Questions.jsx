import React from 'react';
import Answers from './Answers';

const Questions = ({ QUESTIONS, index, setIndex, setCorrect, correct }) => {
  const correctAns = QUESTIONS[index].correct;
  return (
    <div className="row justify-content-between heading">
      <div className="text-center">
        <h2 className="text-center">{QUESTIONS[index].question}</h2>
      </div>
      <div className="row justify-content-around mt-5">
        {QUESTIONS[index].answers.map((answer, key) => {
          return (
            <Answers
              Answers={answer}
              index={index}
              setIndex={setIndex}
              setCorrect={setCorrect}
              key={key}
              ansIndex={key}
              correctAns={correctAns}
              correct={correct}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
