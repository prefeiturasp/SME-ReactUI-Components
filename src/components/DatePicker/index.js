import React from 'react';
import locale from 'antd/es/date-picker/locale/pt_BR';

// Styles
import { DatePickerStyle } from './styles';

function DatePicker({ ...props }) {
  return <DatePickerStyle locale={locale} {...props} />;
}

export default DatePicker;
