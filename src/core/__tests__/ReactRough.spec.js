import React from 'react';
import {shallow} from 'enzyme';
import {Canvas, SVG, Line, Rectangle, Ellipse, Circle} from '../ReactRough';

describe('ReactRough components', () => {
  it.each`
    RoughWrapper | RoughComponent
    ${Canvas}    | ${Line}
    ${Canvas}    | ${Rectangle}
    ${Canvas}    | ${Ellipse}
    ${Canvas}    | ${Circle}
    ${SVG}       | ${Line}
    ${SVG}       | ${Rectangle}
    ${SVG}       | ${Ellipse}
    ${SVG}       | ${Circle}
  `('renders correctly', ({RoughWrapper, RoughComponent}) => {
    const rendered = shallow(
      <RoughWrapper>
        <RoughComponent />
      </RoughWrapper>,
    );
    expect(rendered).toMatchSnapshot();
  });
});
