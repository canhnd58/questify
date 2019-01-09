import React from 'react';
import styled from 'styled-components';
import {SVG, Path} from '../../core/ReactRough';

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
      viewBox="0 0 659 522"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}>
      <Path width="98%" height="98%" d="M654,5v512H5V5H654z" />
    </SVG>
  </InputWrapper>
);

export default Input;
