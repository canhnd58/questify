import React from 'react';
import styled from 'styled-components';
import {SVG, Rectangle} from '../../core/ReactRough';

const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  height: 80px;
  width: 370px;
`;

const ClearedStyleInput = styled.input`
  position: relative;
  background: none;
  border: none;
  outline: none;
  z-index: 1;
  width: 94.6%;
  left: 2.7%;
  height: 75%;
  top: 12.5%;
  font-size: 1.5em;
`;

const Input = props => (
  <InputWrapper>
    <ClearedStyleInput {...props} />
    <SVG
      width="100%"
      height="100%"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
      }}>
      <Rectangle x={5} y={5} width={100} height={70} options={{}} />
    </SVG>
  </InputWrapper>
);

export default Input;
