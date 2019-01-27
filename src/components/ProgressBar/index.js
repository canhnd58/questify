import React from 'react';
import styled from 'styled-components';
import {SVG, Text, Rectangle} from '../../core/ReactRough';


class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: this.props.progress || 0,
    };
  }

  render() {
    const {width=500, height=40} = this.props;
    const {progress} = this.state;
    const paddingBorder = 3;
    const paddingFill = 8;
    return (
      <SVG width={width} height={height}>
        <Rectangle
          x={paddingBorder}
          y={paddingBorder}
          width={width-2*paddingBorder}
          height={height-2*paddingBorder}
        />
        <Rectangle
          x={paddingFill}
          y={paddingFill}
          width={Math.floor((width-2*paddingFill) * progress / 100)}
          height={height-2*paddingFill}
          options={{
            stroke: 'none',
            fill: '#f6b2bb',
            fillWeight: 3,
          }}
        />
      </SVG>
    );
  }
}


export default ProgressBar;
