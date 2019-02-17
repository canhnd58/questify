import React from 'react';
import styled from 'styled-components';

import TriangleButton from '../../components/TriangleButton';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navigator = () => (
  <Wrapper>
    <TriangleButton direction="left">Quit</TriangleButton>
    <span style={{textTransform: 'uppercase'}}>Create new charater</span>
    <TriangleButton direction="right">Next</TriangleButton>
  </Wrapper>
);

export default Navigator;
