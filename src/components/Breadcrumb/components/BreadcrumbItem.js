import React from 'react';
import t from 'prop-types';

// Styles
import { BreadcrumbItemStyle } from '../styles';

function BreadcrumbItem({
  children,
  disabled,
  text,
  href,
  path,
  target,
  separator,
}) {
  return (
    <BreadcrumbItemStyle
      path={path}
      target={target}
      separator={separator}
      href={href}
      disabled={disabled}
    >
      {text}
      {children}
    </BreadcrumbItemStyle>
  );
}

BreadcrumbItem.propTypes = {
  children: t.oneOfType([t.element, t.elementType, t.node]),
  disabled: t.bool,
  text: t.string.isRequired,
  href: t.string,
  path: t.string,
  target: t.string,
  separator: t.string,
};

BreadcrumbItem.defaultProps = {
  disabled: false,
  children: null,
  href: '#',
  path: '#',
  target: '_self',
  separator: '',
};

export default BreadcrumbItem;
