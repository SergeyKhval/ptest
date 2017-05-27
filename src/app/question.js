import React from 'react';
import PropTypes from 'prop-types';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

function Question({question}) {
  return (
    <li>
      {question}
      <RadioButtonGroup name="q">
        <RadioButton/>
        <RadioButton/>
      </RadioButtonGroup>
    </li>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired
};

export default Question;
