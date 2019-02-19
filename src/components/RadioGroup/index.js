import React from 'react';
import styled from 'styled-components';
import {compose, setDisplayName, withState, withHandlers} from 'recompose';
import RadioButton from '../RadioButton';
import {SVG, Circle} from '../../core/ReactRough';

const Wrapper = styled.div`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  flex-direction: ${props => (props.inline ? 'row' : 'column')};
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
`;

const RadioGroup = ({options = [], activeRadio, setActiveRadio, inline}) => (
  <Wrapper inline={inline}>
    {options.map((value, key) => (
      <Option key={key} onClick={() => setActiveRadio(key)}>
        <RadioButton key={key} active={activeRadio === key} />
        {value}
      </Option>
    ))}
  </Wrapper>
);

const enhance = compose(
  withState('activeRadio', 'setActiveRadio', null),
  React.memo,
);

export default enhance(RadioGroup);
