import React from 'react';
import locale from 'antd/es/date-picker/locale/pt_BR';
import shortid from 'shortid';

// Styles
import { DatePickerStyle } from './styles';

// Componentes
import { Icon } from '~/components';

function DatePicker({ ...props }) {
  const customId = shortid.generate();
  return (
    <>
      <DatePickerStyle
        suffixIcon={
          <Icon
            className="anticon-calendar ant-calendar-picker-icon"
            type="solid"
            icon="fa-calendar-alt"
          />
        }
        locale={locale}
        format="DD/MM/YYYY"
        getCalendarContainer={document.getElementById(`#${customId}`)}
        {...props}
      />
      <div id={`${customId}`}></div>
    </>
  );
}

export default DatePicker;
