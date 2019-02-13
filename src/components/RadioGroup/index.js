import React from 'react';
import styled from 'styled-components';
import {compose, setDisplayName, withState, withHandlers} from 'recompose';
import RadioButton from '../RadioButton';
import {SVG, Circle} from '../../core/ReactRough';

const Wrapper = styled.div`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
`;

const RadioGroup = ({options = [], activeRadio, setActiveRadio, inline}) =>
  options.map((value, key) => (
    <Wrapper key={key} onClick={() => setActiveRadio(key)} inline={inline}>
      <RadioButton key={key} active={activeRadio === key} />
      {value}
    </Wrapper>
  ));

const enhance = compose(
  withState('activeRadio', 'setActiveRadio', null),
  React.memo,
);

export default enhance(RadioGroup);
