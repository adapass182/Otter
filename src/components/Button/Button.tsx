import React from 'react';

const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default Button;
