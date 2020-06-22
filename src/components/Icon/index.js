import React from 'react';
import t from 'prop-types';

import { IconStyle } from './styles';

const typesMap = {
  solid: 'fas',
  brand: 'fab',
  regular: 'far',
  light: 'fal',
  duotone: 'fad',
};

function Icon({ type, icon, typeColor, className }) {
  return (
    <IconStyle
      typeColor={typeColor}
      className={`${typesMap[type]} ${icon} ${className}`}
    />
  );
}

Icon.propTypes = {
  type: t.oneOf(['solid', 'brand', 'regular', 'light', 'duotone']),
  icon: t.string,
};

Icon.defaultProps = {
  type: 'solid',
  icon: null,
};

export default Icon;
