import React from 'react';
import t from 'prop-types';

import { IconStyle } from './styles';

const typesMap = {
  solid: 'fas',
  brand: 'fab',
  regular: 'far',
};

function Icon({ 
  type = 'solid', 
  icon = '', 
  size = 'md', 
  color = '', 
  className = ''
}) {
  return (
    <IconStyle
      color={color}
      size={size}
      className={`sme__icon ${typesMap[type]} ${icon} ${className}`}
    />
  );
}

Icon.propTypes = {
  type: t.oneOf(['solid', 'brand', 'regular']),
  size: t.oneOf(['xxs', 'xs', 'sm', 'md', 'lg']),
  color: t.oneOf(['primary', 'secondary', 'tertiary', 'success', 'error', 'info', 'warning', 'dark', 'light']),
  icon: t.string,
};

Icon.defaultProps = {
  type: 'solid',
  size: 'md',
  icon: null,
};

export default Icon;
