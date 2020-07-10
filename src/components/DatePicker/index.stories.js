import React, { useState } from 'react';

// Components
import { DatePicker } from '~/components';

export default {
  title: 'Components|DatePicker',
  component: DatePicker,
};

export const DatePickerStory = () => {
  const [date, setDate] = useState(undefined);

  return (
    <DatePicker
      value={date}
      onChange={(selectedDate) => setDate(selectedDate)}
    />
  );
};

export const DatePickerDisabledStory = () => <DatePicker disabled />;

DatePickerStory.story = {
  name: 'default datepicker',
};

DatePickerDisabledStory.story = {
  name: 'disabled datepicker',
};
