import React from 'react';
import {SVG, Line} from '../../core/ReactRough';

const HorizontalRule = () => (
  <SVG width="100%" height={10} viewBox="0 0 100 10" preserveAspectRatio="none">
    <Line x1={0} y1={5} x2={100} y2={5} />
  </SVG>
);

export default HorizontalRule;
