import React from 'react';
import styled from 'styled-components';
import {SVG, Text, Rectangle} from '../../core/ReactRough';

const ButtonText = styled(Text)`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  text-anchor: middle;
  alignment-baseline: central;
`

const ButtonSVG = styled(SVG)`
  cursor: pointer;
  &:hover {
    transform: translate(0, -2px);
  }
  &:active {
    transform: translate(0, 0);
  }
`

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    }
  }

  componentDidMount() {
    const {width, height} = this.textRef.getBBox();
    const padding_x = 30;
    const padding_y = 20;
    this.setState({
      width: width + padding_x,
      height: height + padding_y
    });
  }

  render() {
    const {width, height} = this.state;
    const {children, color} = this.props;
    const padding = 3;

    return (
      <ButtonSVG width={width} height={height}>
        <Rectangle
          x={padding}
          y={padding}
          width={width - 2 * padding}
          height={height - 2 * padding}
          options={{
            fill: color,
            fillWeight: 3,
          }}
        />
        <ButtonText
          ref={e => this.textRef = e}
          x={width / 2}
          y={height / 2}
        >
          {children}
        </ButtonText>

      </ButtonSVG>
    );
  }
}

export default Button;
