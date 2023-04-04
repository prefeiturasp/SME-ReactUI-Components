import React, { useState } from 'react';

import { Row, Col } from 'antd';

// Components
import { Slider, NumberField } from '~/components';

export default {
  title: 'Components|Slider',
  component: Slider,
};

export const SliderStory = () => {
  return (
    <Row>
        <Col span={8}>
            <Slider/>        
        </Col>
    </Row>
  );
};

export const DefaultStory = () => {
    return (
      <Row>
          <Col span={8}>
              <Slider defaultValue={50}/>        
          </Col>
      </Row>
    );
};

export const Disabled = () => {
    return (
        <Row>
            <Col span={8}>
                <Slider disabled/>        
            </Col>
        </Row>
    );
};

export const WithInput = () => {
    const [inputValue, setInputValue] = useState(0);
    
    const onChange = (newValue) => {
        setInputValue(newValue);
    };

    return (
        <Row>
            <Col span={8}>
                <Row>
                    <Col span={12}>
                        <Slider value={inputValue} onChange={onChange}/>
                    </Col>
                    <Col span={1}>
                        <NumberField onChange={onChange} value={inputValue} min={0} max={100}/>
                    </Col>
                </Row>                
            </Col>
        </Row>
    );
};

export const WithText = () => {
    const [inputValue, setInputValue] = useState(0);
    
    const onChange = (newValue) => {
        setInputValue(newValue);
    };

    const marks = {
        0: '0',
        100: '100'
    };

    return (
      <Row>
          <Col span={8}>
              <Slider value={inputValue} marks={marks} onChange={onChange}/>        
          </Col>
      </Row>
    );
};

SliderStory.story = {
    name: 'default slider',
};

DefaultStory.story = {
    name: 'default slider',
};

Disabled.story = {
    name: 'disabled',
};

WithInput.story = {
    name: 'with input',
};

WithText.story = {
    name: 'with text',
};
