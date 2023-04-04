import React from 'react';
import t from 'prop-types';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/pt_BR';
import shortid from 'shortid';

// Styles
import { RangePickerStyle, InputContentStyle, IconErrorStyle, HelptexttStyle, ErrorIcon } from '../styles';

// Componentes
import { Icon } from '~/components';

function RangePicker({ value, onChange, allowClear, disabled, disabledDate, helpText, error = false }) {
  const customId = shortid.generate();
  return (
    <InputContentStyle>
      <RangePickerStyle
        suffixIcon={
          <Icon
            className="anticon-calendar ant-calendar-picker-icon"
            type="solid"
            icon="fa-calendar-alt"
            size="xs"
          />
        }
        locale={locale}
        format="DD/MM/YYYY"
        placement="bottomLeft"
        getCalendarContainer={document.getElementById(`#${customId}`)}
        onChange={onChange}
        value={value}
        allowClear={allowClear}
        disabled={disabled}
        disabledDate={disabledDate}
        error={error}
      />
      <div id={`${customId}`}></div>
      {error && <IconErrorStyle>{ErrorIcon}</IconErrorStyle>}
      {helpText && <HelptexttStyle error={error}>{helpText}</HelptexttStyle>}
    </InputContentStyle>
  );
}

RangePicker.propTypes = {
  value: t.instanceOf(moment),
  onChange: t.func,
  allowClear: t.bool,
  disabled: t.bool,
  disabledDate: t.func,
};

RangePicker.defaultProps = {
  allowClear: true,
  disabled: false,
};

export default RangePicker;
