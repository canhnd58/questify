import React from 'react';
import {compose, setDisplayName, withState, withHandlers} from 'recompose';
import {SVG, Circle} from '../../core/ReactRough';

const RadioButton = ({active}) => (
  <div style={{display: 'inline-block'}}>
    <SVG width={28} height={28}>
      <Circle x={12} y={12} diameter={20} />
      {active && (
        <Circle
          x={12}
          y={12}
          diameter={12}
          options={{fill: 'black', fillStyle: 'solid'}}
        />
      )}
    </SVG>
  </div>
);

export default RadioButton;
