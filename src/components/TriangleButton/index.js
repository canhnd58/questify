import React from 'react';
import styled from 'styled-components';
import {SVG, Polygon} from '../../core/ReactRough';

const FLEX_DIRECTION_MAP = {
  left: 'row',
  right: 'row-reverse',
  up: 'column',
  down: 'column-reverse',
};

const MARGIN_ATRR_MAP = {
  left: 'marginRight',
  right: 'marginLeft',
  up: 'marginBottom',
  down: 'marginTop',
};

const ButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: ${props => FLEX_DIRECTION_MAP[props.direction]};
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: translate(0, -2px);
  }
  &:active {
    transform: translate(0, 0);
  }
`;

class TriangleButton extends React.Component {
  render() {
    const {
      width = 40,
      height = 40,
      color = '#aaa',
      direction = 'right',
      children,
      style,
    } = this.props;
    const padding = 3;

    const vertices = {
      up: [
        [padding, height - padding], // [x, y]
        [width - padding, height - padding],
        [width / 2, padding],
      ],
      down: [
        [padding, padding],
        [width - padding, padding],
        [width / 2, height - padding],
      ],
      left: [
        [width - padding, padding],
        [width - padding, height - padding],
        [padding, height / 2],
      ],
      right: [
        [padding, padding],
        [padding, height - padding],
        [width - padding, height / 2],
      ],
    };

    return (
      <ButtonWrapper direction={direction} style={style}>
        <SVG
          width={width}
          height={height}
          style={{[MARGIN_ATRR_MAP[direction]]: 10}}>
          <Polygon
            vertices={vertices[direction]}
            options={{
              fill: color,
              fillWeight: 3,
            }}
          />
        </SVG>
        {children}
      </ButtonWrapper>
    );
  }
}

export default TriangleButton;
