import React from 'react';
import t from 'prop-types';

// Components
// import { Button, Icon, Spin } from '~/components';

// Styles
import { TagStyle, CheckableTagStyle } from './styles';

function Tag({ children, checkable, checked, closable, onClose, onChange }) {
  if (checkable){
    return (
      <CheckableTagStyle
        checked={checked}
        onChange={onChange}
      >
        {children}
      </CheckableTagStyle>
    )
  }
  return (
    <TagStyle
      closable={closable}
      onClose={onClose}
    >
      {children}
    </TagStyle>
  );
};

Tag.propTypes = {
  checkable: t.bool,
  checked: t.bool,
  closable: t.bool,
  onClose: t.func,
  onChange: t.func
};

Tag.defaultProps = {
  checkable: false,
  checked: false,
  closable: false,
  onClose: () => {},
  onChange: () => {}
};

export default Tag;
