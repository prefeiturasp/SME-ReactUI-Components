import React from 'react';

// Componentes
import DatePicker from './components/DatePicker';
import RangePicker from './components/RangePicker';
import TimePicker from './components/TimePicker';

function DatePickerComponent() {
  return <div></div>;
}

DatePickerComponent.DatePicker = DatePicker;
DatePickerComponent.RangePicker =  RangePicker;
DatePickerComponent.TimePicker =  TimePicker;

export default DatePickerComponent;
