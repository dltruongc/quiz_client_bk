import React from 'react';
import Checkbox from '../Checkbox';
import Answer from './Answer';

import './Quiz.scss';

export default function Quiz({ quiz, key }) {
  const renderAnswers = () => {
    return quiz.answers.map((answer) => {
      return (
        <Answer
          multi={quiz.isMultipleChoice || false}
          quizId={quiz._id}
          name={answer.name}
          key={answer._id}
        />
      );
    });
  };

  return (
    <div>
      <div className='quiz' key={key}>
        <Checkbox value={quiz.answers[0].name} id={key} />
        <div className='quiz__question'>{quiz.question}</div>
        {/* {JSON.stringify(quiz)} */}
      </div>
      <div>{renderAnswers()}</div>
    </div>
  );
}
