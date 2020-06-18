import React from 'react';

// Components
import { Icon } from '~/components';

// Styles
import { InputStyle, InputSearchStyle, InputWrapperStyle } from './styles';

function TextField({ label, required, errorMessage, ...props }) {
  return (
    <InputWrapperStyle required={required}>
      {label && <span className="label">{String(label)}</span>}
      <InputStyle
        suffix={
          errorMessage && <Icon type="solid" icon="fa-exclamation-circle" />
        }
        className={errorMessage && `has-error`}
        {...props}
      />
      {errorMessage && (
        <span className="errorMessage">{String(errorMessage)}</span>
      )}
    </InputWrapperStyle>
  );
}

function TextFieldSearch({ ...props }) {
  return (
    <InputWrapperStyle>
      <InputSearchStyle {...props} />
    </InputWrapperStyle>
  );
}

TextField.Search = TextFieldSearch;

export default TextField;
