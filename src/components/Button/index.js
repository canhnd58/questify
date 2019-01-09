import React from 'react';
import {SVG, Text, Rectangle} from '../../core/ReactRough';

class Button extends React.Component {
  render() {
    const WIDTH = 80;
    const HEIGHT = 40;
    const PADDING = 3;
    const {children, color} = this.props;

    return (
      <SVG width={WIDTH} height={HEIGHT} style={{cursor: 'pointer'}}>
        <Rectangle
          x={PADDING}
          y={PADDING}
          width={WIDTH-2*PADDING}
          height={HEIGHT-2*PADDING}
          options={{
            fill: color,
            fillWeight: 3,
          }}
        />
        <Text
          x={WIDTH/2}
          y={HEIGHT/2}
          textAnchor={'middle'}
          alignmentBaseline={'central'}
        >
          {children}
        </Text>

      </SVG>
    );
  }
}

export default Button;
