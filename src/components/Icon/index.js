import React from 'react';
import t from 'prop-types';

const typesMap = {
  solid: 'fas',
  brand: 'fab',
  regular: 'far',
  light: 'fal',
  duotone: 'fad',
};

function Icon({ type, icon }) {
  return <i className={`${typesMap[type]} ${icon}`} />;
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
