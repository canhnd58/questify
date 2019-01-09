import React from 'react';
import {SVG, Rectangle} from '../../core/ReactRough';

const Input = ({children, color}) => (
  <>
    <input />
    <SVG width={90} height={50} style={{cursor: 'pointer'}}>
      <Rectangle x={5} y={5} width={80} height={40} options={{fill: 'navy'}} />
    </SVG>
  </>
);

export default Input;
