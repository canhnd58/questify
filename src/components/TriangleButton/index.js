import React from 'react';
import styled from 'styled-components';
import {SVG, Polygon} from '../../core/ReactRough';

const ButtonSVG = styled(SVG)`
  cursor: pointer;
  &:hover {
    transform: translate(0, -2px);
  }
  &:active {
    transform: translate(0, 0);
  }
`

class TriangleButton extends React.Component {
  render() {
    const {
      width = 40,
      height = 40,
      color = '#aaa',
      direction = 'right',
    } = this.props;
    const padding = 3;

    const vertices = {
      'up': [
        [padding, height - padding], // [x, y]
        [width - padding, height - padding],
        [width / 2, padding],
      ],
      'down': [
        [padding, padding],
        [width - padding, padding],
        [width / 2, height - padding],
      ],
      'left': [
        [width - padding, padding],
        [width - padding, height - padding],
        [padding, height / 2],
      ],
      'right': [
        [padding, padding],
        [padding, height - padding],
        [width - padding, height / 2],
      ],
    };

    return (
      <ButtonSVG width={width} height={height}>
        <Polygon
          vertices={vertices[direction]}
          options={{
            fill: color,
            fillWeight: 3,
          }}
        />
      </ButtonSVG>
    );
  }
}

export default TriangleButton;
