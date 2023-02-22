import React from 'react';
import t from 'prop-types';
import PanelHeader from './PanelHeader';
// Styles
import { PanelStyle } from '../styles';

// disabled, bordered, borderColor, header, key
function Panel({
  children,
  disabled,
  bordered,
  borderColor,
  header,
  subtitle,
  icon,
  key,
  ...props
}) {
  return (
    <PanelStyle
      disabled={disabled}
      bordered={bordered}
      borderColor={borderColor}
      header={
      <PanelHeader 
        key={key} 
        icon={icon} 
        iconColor={borderColor}
        title={header} 
        subtitle={subtitle}/>
      }
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

Panel.PanelHeader = PanelHeader;

export default Panel;
