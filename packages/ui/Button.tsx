import React from 'react';
import { ButtonProps } from '@bluente/types/ButtonProps';

const Button: React.FC<ButtonProps> = (props) => (
  <button onClick={() => props.onClick()}>{props.children}</button>
);

export default Button;
