/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Button = (props) => {
  return (
    <input
      type="button"
      className={props.className}
      value={props.value}
    />
  );
};

export default Button;