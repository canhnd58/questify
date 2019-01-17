import React from 'react';
import {compose, setDisplayName, withState, withHandlers} from 'recompose';
import {SVG, Circle} from '../../core/ReactRough';

const RadioButton = ({checked, toggleChecked}) => (
  <div style={{display: 'inline-block'}} onClick={toggleChecked}>
    <SVG width={20} height={20}>
      <Circle x={10} y={10} diameter={14} options={{
        fill: checked ? '#ffc78f' : '#fff',
        fillWeight: 3,
        roughness: 0.5,
      }}/>
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
