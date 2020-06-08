import React from 'react';
import t from 'prop-types';

// Styles
import { CheckboxStyle } from './styles';

function Checkbox({ children }) {
  return (
    <CheckboxStyle>
      {children}
    </CheckboxStyle>
  );
};

Checkbox.propTypes = {};

Checkbox.defaultProps = {};

export default Checkbox;
