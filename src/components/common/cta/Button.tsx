import React from 'react';
import { colorPalette } from '../../../assets/theme/theme';
import classNames from 'classnames';

interface ButtonProps {
  handleClick: () => void;
  buttonText: string;
  theme?: string;
  style?: React.CSSProperties;
  className?: string;
}

function Button({ handleClick, buttonText, theme, className }: ButtonProps) {
  const buttonStyle = {
    //colorPalette theme from plain CSS
    // backgroundColor: colorPalette[theme],
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonClasses = classNames(className, {});
  return (
    <button className={buttonClasses} style={buttonStyle} onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default Button;
