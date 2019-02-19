import React from 'react';
import styled from 'styled-components';

import Navigator from '../Navigator';
import HorizontalRule from '../../components/HorizontalRule';
import TextArea from '../../components/TextArea';
import Tooltip from '../../components/Tooltip';
import ImageUploader from '../../components/ImageUploader';
import Input from '../../components/Input';
import RadioGroup from '../../components/RadioGroup';
import Checkbox from '../../components/Checkbox';

const Wrapper = styled.div`
  dipslay: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldLabel = ({label, tooltip, children, style}) => (
  <Row style={{alignItems: 'center', ...style}}>
    <span style={{fontWeight: 'bold', margin: '0 5px'}}>{label}</span>
    <Tooltip>{tooltip}</Tooltip>
  </Row>
);

const NewCharacter = () => (
  <Wrapper>
    <Navigator title="Create new character" />
    <HorizontalRule />
    <Row style={{justifyContent: 'space-between', marginBottom: 20}}>
      <Col>
        <FieldLabel label="Avatar" tooltip="Your avatar" />
        <ImageUploader width={100} height={100} style={{marginBottom: 10}} />
        <FieldLabel label="Name" tooltip="Your name" />
        <Input />
      </Col>
      <Col>
        <FieldLabel label="Story" tooltip="Your story" />
        <TextArea />
      </Col>
    </Row>
    <Row style={{marginBottom: 20}}>
      <Col style={{flex: 1}}>
        <FieldLabel label="Gender" tooltip="Your gender" />
        <RadioGroup options={['Male', 'Female', 'Other']} inline />
      </Col>
      <Col style={{flex: 1}}>
        <FieldLabel
          label="Keep secret"
          tooltip="If you check any checkbox down here, you will hide the related information from seeing by other people"
        />
        <Checkbox />
      </Col>
    </Row>
    <Row>
      <Col style={{width: '100%'}}>
        <FieldLabel label="Born" tooltip="Your birthday" />
        <Row>
          <Input style={{flex: 1}} />
          <Checkbox style={{flex: 1}} />
        </Row>
      </Col>
    </Row>
  </Wrapper>
);

export default NewCharacter;
