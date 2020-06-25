import React from 'react';
import t from 'prop-types';

// Styles
import { BreadcrumbStyle } from '../styles';

function BreadcrumbItem({ disabled, text, href, path, target, separator }) {
  return (
    <BreadcrumbStyle.Item
      path={path}
      target={target}
      separator={separator}
      href={href}
      disabled={disabled}
    >
      {text}
    </BreadcrumbStyle.Item>
  );
}

BreadcrumbItem.propTypes = {
  disabled: t.bool.isRequired,
  text: t.string.isRequired,
  href: t.string,
  path: t.string,
  target: t.string,
  separator: t.oneOfType([t.string, t.element, t.elementType]),
};

BreadcrumbItem.defaultProps = {
  href: '#',
  path: '#',
  target: '_self',
  separator: '',
};

export default BreadcrumbItem;
