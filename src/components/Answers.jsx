import React from 'react';

const Answers = ({
  Answers,
  setIndex,
  setCorrect,
  index,
  correctAns,
  ansIndex,
  correct,
}) => {
  const handleClick = () => {
    if (ansIndex === correctAns) {
      setCorrect(correct + 1);
    }
    setIndex(index + 1);
  };
  return (
    <ul>
      <li className="list" onClick={handleClick}>
        {Answers}
      </li>
    </ul>
  );
};

export default Answers;
