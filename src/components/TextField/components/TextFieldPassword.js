import React from 'react';
import t from 'prop-types';

import { InputWrapperStyle, InputPasswordStyle } from '../styles';

function TextFieldPassword({ 
    id,
    label,
    onChange,
    value,
    placeholder
}) {
  return (
    <InputWrapperStyle>
        {label && <span className="label">{String(label)}</span>}
        <InputPasswordStyle
            id={id}
            label={label}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    </InputWrapperStyle>
  );
}

TextFieldPassword.propTypes = {
    id: t.string,
    label: t.string,
    onChange: t.func,
    value: t.string,
    placeholder: t.string,
};

TextFieldPassword.defaultProps = {
    id: "",
    label: "",
    onChange: null,
    value: "",
    placeholder: "",
};

export default TextFieldPassword;
