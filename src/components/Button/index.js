import React from 'react';
import {SVG, Rectangle} from '../../core/ReactRough';

const Button = ({children, color}) => (
  <SVG>
    <Rectangle x={120} y={15} width={80} height={40} options={{fill: 'red'}} />
  </SVG>
);

export default Button;
