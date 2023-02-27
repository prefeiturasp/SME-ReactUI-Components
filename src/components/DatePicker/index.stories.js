import { Col, Row } from 'antd';
import React, { useState } from 'react';

// Components
import { DatePickerComponent } from '~/components';
const { DatePicker, RangePicker, TimePicker } = DatePickerComponent;

export default {
  title: 'Components|DatePicker',
  component: DatePicker,
  subcomponents: { RangePicker, TimePicker },
};

export const DatePickerDefaultStory = () => {
  const [date, setDate] = useState(undefined);

  return (
    <DatePicker
      value={date}
      onChange={(selectedDate) => setDate(selectedDate)}
      helpText="Helptext default datepicker story"
    />
  );
};

export const DatePickerAllStory = () => {
  const [date, setDate] = useState(undefined);

  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <DatePicker
          value={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          helpText="Helptext default datepicker story"
        />        
      </Col>      
      <Col span={8}>
        <DatePicker
          value={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          helpText="Helptext default datepicker story"
          error={true}
        />        
      </Col>
      <Col span={8}>
        <DatePicker
          disabled
        />        
      </Col>      
    </Row>
  );
};

export const RangePickerAllStory = () => {
  const [date, setDate] = useState(undefined);

  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <RangePicker
          value={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          helpText="Helptext default datepicker story"
        />        
      </Col>      
      <Col span={8}>
        <RangePicker
          value={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          helpText="Helptext default datepicker story"
          error={true}
        />        
      </Col>
      <Col span={8}>
        <RangePicker
          disabled
        />        
      </Col>      
    </Row>
  );
};

export const TimePickerAllStory = () => {
  const [date, setDate] = useState(undefined);

  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <TimePicker
          value={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          helpText="Helptext default datepicker story"
        />        
      </Col>      
      <Col span={8}>
        <TimePicker
          value={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          helpText="Helptext default datepicker story"
          error={true}
        />        
      </Col>
      <Col span={8}>
        <TimePicker
          disabled
        />        
      </Col>      
    </Row>
  );
};

DatePickerDefaultStory.story = {
  name: 'default datepicker',
};

DatePickerAllStory.story = { name: 'datepicker'}

RangePickerAllStory.story = { name: 'rangepicker'}

TimePickerAllStory.story = { name: 'timepicker'}