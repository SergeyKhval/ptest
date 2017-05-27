import React from 'react';
import Question from './question';

function Questions() {
  return (
    [1, 2, 3].map(n => <Question question={n} key={n}/>)
  );
}

export default Questions;
