import React from 'react';
import {SVG, Rectangle} from '../../core/ReactRough';

const Button = ({children, color}) => (
  <SVG width={80} height={40}>
    <Rectangle x={0} y={0} width={80} height={40} options={{fill: 'red'}} />
  </SVG>
);

export default Button;
