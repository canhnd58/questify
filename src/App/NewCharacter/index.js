import React from 'react';
import styled from 'styled-components';

import Navigator from '../Navigator';

const Wrapper = styled.div`
  dipslay: flex;
  flex-direction: column;
  padding: 10px 20px;
  height: 100vh;
`;

const NewCharacter = () => (
  <Wrapper>
    <Navigator title="Create new character" />
    <div>This is the content</div>
  </Wrapper>
);

export default NewCharacter;
