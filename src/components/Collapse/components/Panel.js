import React from 'react';
import t from 'prop-types';

// Styles
import { PanelStyle } from '../styles';

// disabled, bordered, borderColor, header, key
function Panel({
  children,
  disabled,
  bordered,
  borderColor,
  header,
  key,
  ...props
}) {
  return (
    <PanelStyle
      disabled={disabled}
      bordered={bordered}
      borderColor={borderColor}
      header={header}
      key={key}
      {...props}
    >
      {children}
    </PanelStyle>
  );
}

Panel.propTypes = {
  disabled: t.bool,
  bordered: t.bool,
  borderColor: t.string,
  header: t.string.isRequired,
  key: t.oneOfType([t.string]),
};

Panel.defaultProps = {
  disabled: false,
  bordered: false,
  borderColor: null,
};

export default Panel;
