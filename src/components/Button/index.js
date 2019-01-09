import React from 'react';
import {SVG, Rectangle} from '../../core/ReactRough';

const Button = ({children, color}) => (
  <SVG width={90} height={50} style={{cursor: 'pointer'}}>
    <Rectangle x={5} y={5} width={80} height={40} options={{fill: 'red'}} />
  </SVG>
);

export default Button;
