import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { DatePicker } from '~/components';

// Themes
import Themes from '~/themes';

function DatePickerExample() {
  const [date, setDate] = useState(false);
  return (
    <div className="App">
      <div style={{ width: '50%' }}>
        <ThemeProvider theme={Themes.temaSIGPAE}>
          <DatePicker
            value={date}
            onChange={(selectedDate) => setDate(selectedDate)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default DatePickerExample;
