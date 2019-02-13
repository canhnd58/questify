import React from 'react';
import roughify from '../../core/roughify';

const Test = React.forwardRef((props, ref) => (
  <div ref={ref} {...props}>abc</div>
));

export default roughify(Test);
