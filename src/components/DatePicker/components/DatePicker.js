import React from 'react';
import t from 'prop-types';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/pt_BR';
import shortid from 'shortid';

// Styles
import { DatePickerStyle, InputContentStyle, IconErrorStyle, HelptexttStyle, ErrorIcon } from '../styles';

// Componentes
import { Icon } from '~/components';

/**
 * `import { DatePicker, RangePicker, TimePicker } from "@sme/secretui"`
 *
 * Os componentes de data permitem que o usuário faça uma seleção específica por meio de um calendário visual. Por padrão, o calendário sempre exibe o mês atual. Se você já tiver uma data digitada, o calendário exibirá o mês para essa data.
 *
 * # Boas práticas de uso
 * - Use quando a data selecionada estiver próxima da data real ou por um período inferior a 1 ano.
 * - O usuário deve poder inserir valores também através do teclado.
 * - Use espaços reservados para indicar o formato da entrada de dados, por exemplo: dd / mm / aaaa ou mm / dd / aa, etc.
 * - O campo deve ter apenas um tipo de entrada e não deve ser dividido em campos para cada informação (dia, mês, ano).
 */

function DatePicker({ value, onChange, allowClear, disabled, disabledDate, helpText, error = false }) {
  const customId = shortid.generate();
  return (
    <InputContentStyle>
      <DatePickerStyle
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

DatePicker.propTypes = {
  value: t.instanceOf(moment),
  onChange: t.func,
  allowClear: t.bool,
  disabled: t.bool,
  disabledDate: t.func,
};

DatePicker.defaultProps = {
  allowClear: true,
  disabled: false,
};

export default DatePicker;
