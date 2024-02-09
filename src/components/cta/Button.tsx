import React from 'react';

interface ButtonProps {
  handleClick: () => void;
  buttonText: string;
}

function Button({ handleClick, buttonText }: ButtonProps) {
  return <button onClick={handleClick}>{buttonText}</button>;
}

export default Button;
