import React from 'react';
import {compose, setDisplayName, withState, withHandlers} from 'recompose';

import {Path, SVG} from '../../core/ReactRough';

const Checkbox = ({checked, toggleChecked, style}) => (
  <div style={{display: 'inline-block', ...style}} onClick={toggleChecked}>
    <SVG width={28} height={28}>
      <Path
        d={
          checked
            ? 'M22 22h-19v-19h19v2h-1v-1h-17v17h17v-9.502h1v10.502zm5-19.315l-14.966 15.872-5.558-6.557.762-.648 4.833 5.707 14.201-15.059.728.685z'
            : 'M22 22h-19v-19h19v2h-1v-1h-17v17h17v-17h1v17z'
        }
      />
    </SVG>
  </div>
);

const enhance = compose(
  setDisplayName('Checkbox'),
  withState(
    'checked',
    'setChecked',
    ({defaultChecked}) => defaultChecked || false,
  ),
  withHandlers({
    toggleChecked: ({setChecked}) => () => setChecked(checked => !checked),
  }),
);

export default enhance(Checkbox);
