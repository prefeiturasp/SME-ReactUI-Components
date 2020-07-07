import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { DatePicker, useTheme } from '~/components';

// Themes
import Themes from '~/themes';

function DatePickerExample() {
  const [date, setDate] = useState(false);
  const tema = useTheme({
    Colors: {
      Primary: Themes.temaSGP.primary,
      PrimaryLight: Themes.temaSGP.primaryLight,
      PrimaryDark: Themes.temaSGP.primaryDark,
    },
  });

  return (
    <div className="App">
      <div style={{ width: '50%' }}>
        <ThemeProvider theme={tema}>
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
