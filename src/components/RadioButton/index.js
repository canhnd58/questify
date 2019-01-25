import React from 'react';
import {compose, setDisplayName, withState, withHandlers} from 'recompose';
import {SVG, Circle} from '../../core/ReactRough';

const RadioButton = ({checked, toggleChecked}) => (
  <div style={{display: 'inline-block'}} onClick={toggleChecked}>
    <SVG width={28} height={28}>
      <Circle x={12} y={12} diameter={20} />
      {checked && (
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

const enhance = compose(
  setDisplayName('RadioButton'),
  withState(
    'checked',
    'setChecked',
    ({defaultChecked}) => defaultChecked || false,
  ),
  withHandlers({
    toggleChecked: ({setChecked}) => () => setChecked(checked => !checked),
  }),
);

export default enhance(RadioButton);
