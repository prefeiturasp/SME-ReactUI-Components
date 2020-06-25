import React from 'react';
import t from 'prop-types';

// Styles
import { BreadcrumbStyle } from '../styles';

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
    <BreadcrumbStyle.Item
      path={path}
      target={target}
      separator={separator}
      href={href}
      disabled={disabled}
    >
      {text}
      {children}
    </BreadcrumbStyle.Item>
  );
}

BreadcrumbItem.propTypes = {
  children: t.oneOfType([t.element, t.elementType, t.node]),
  disabled: t.bool.isRequired,
  text: t.string.isRequired,
  href: t.string,
  path: t.string,
  target: t.string,
  separator: t.oneOfType([t.string, t.element, t.elementType]),
};

BreadcrumbItem.defaultProps = {
  children: null,
  href: '#',
  path: '#',
  target: '_self',
  separator: '',
};

export default BreadcrumbItem;
