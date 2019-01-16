import React from 'react';
import styled from 'styled-components';
import {SVG, Rectangle} from '../../core/ReactRough';

const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  height: 50px;
  width: 200px;
`;

const ClearedStyleInput = styled.input`
  position: relative;
  background: none;
  border: none;
  outline: none;
  z-index: 1;
  width: 90%;
  left: 5%;
  height: 75%;
  top: 12.5%;
  font-size: 1em;
`;

const Input = props => (
  <InputWrapper>
    <ClearedStyleInput {...props} />
    <SVG
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}>
      <Rectangle x={5} y={5} height={40} width={190} />
    </SVG>
  </InputWrapper>
);

export default Input;
