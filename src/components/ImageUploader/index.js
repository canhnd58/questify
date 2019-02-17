import React from 'react';
import styled from 'styled-components';
import {SVG, Rectangle, Line} from '../../core/ReactRough';

const Wrapper = styled.div`
  position: relative;

  & svg {
    position: absolute;
  }

  & img {
    position: absolute;
  }

  & input[type='file'] {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
`;

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (!e.target.files[0]) return;

    this.setState({
      src: URL.createObjectURL(e.target.files[0]),
    });

    if (this.props.handleChange) this.props.handleChange(e);
  }

  render() {
    const {width, height, style} = this.props;
    const {src} = this.state;
    const padding = 3;
    const boxX = padding;
    const boxY = padding;
    const boxW = width - 2 * padding;
    const boxH = height - 2 * padding;

    return (
      <Wrapper style={{width, height, ...style}}>
        {src && (
          <img
            src={src}
            width={width - 2 * padding}
            height={height - 2 * padding}
            style={{
              top: padding,
              left: padding,
            }}
            alt=""
          />
        )}
        <SVG width={width} height={height}>
          <Rectangle x={boxX} y={boxY} width={boxW} height={boxH} />
          {!src && (
            <Line x1={boxX} y1={boxY} x2={boxX + boxW} y2={boxY + boxH} />
          )}
          {!src && (
            <Line x1={boxX + boxW} y1={boxY} x2={boxX} y2={boxY + boxH} />
          )}
        </SVG>
        <input
          type="file"
          style={{width, height}}
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

export default ImageUploader;
