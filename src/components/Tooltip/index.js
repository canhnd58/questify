import React from 'react';
import styled from 'styled-components';
import {SVG, Rectangle, Circle, Text} from '../../core/ReactRough';

const Wrapper = styled.div`
  display: inline-block;

  & .tooltipbox {
    position: absolute;
    z-index: 99;
    visibility: hidden;
    background-color: white;
  }

  &:hover .tooltipbox {
    visibility: visible;
  }
`

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxHeight: 0,
      textDiameter: 0,
    };
  }

  componentDidMount() {
    const {height} = this.textRef.getBBox();
    this.setState({
      boxHeight: this.boxRef.clientHeight,
      textDiameter: height + 8,
    });
  }

  render() {
    const {children, boxWidth=500} = this.props;
    const {boxHeight, textDiameter} = this.state;
    const boxPadding = 15;
    const textPadding = 3;

    return (
      <Wrapper>
        <SVG width={textDiameter} height={textDiameter}>
          <Circle
            x={textDiameter / 2}
            y={textDiameter / 2}
            diameter={textDiameter - 2 * textPadding}
          />
          <Text
            ref={e => this.textRef = e}
            x={textDiameter / 2}
            y={textDiameter / 2}
            textAnchor='middle'
            alignmentBaseline='central'
            fontWeight='bold'
          >
            ?
          </Text>
        </SVG>
        <div
          className='tooltipbox'
          style={{
            width: boxWidth,
            height: boxHeight,
          }}
        >
          <SVG width={boxWidth} height={boxHeight} style={{
            position: 'absolute',
            overflow: 'visible'
          }}>
            <Rectangle
              x={0}
              y={0}
              width={boxWidth}
              height={boxHeight}
              options={{
                fill: '#ecfbff',
                fillWeight: 3,
              }}
            />
          </SVG>
          <div
            ref={e => this.boxRef = e}
            style={{
              position: 'absolute',
              width: boxWidth - 2*boxPadding,
              padding: boxPadding,
              textAlign: 'justify',
            }}
          >
            {children}
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default Tooltip;
