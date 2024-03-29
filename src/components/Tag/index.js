import React from 'react';
import t from 'prop-types';

// Styles
// import { TagStyle, CheckableTagStyle } from './styles';
import { Tag as TagStyle } from 'antd';
/**
 * `import { Tag } from "@sme/secretui"`
 *
 * O componente é indicado para casos onde é necessário categorizar, organizar ou nomear componentes utilizando palavras-chave para descrevê-los. Tags proporcionam um rápido reconhecimento e navegação.
 *
 * # Boas práticas de uso
 * - Use no máximo 4 palavras por tag.
 */
function Tag({
  children,
  checkable,
  checked,
  closable,
  size,
  add,
  onClose,
  onChange,
  ...props
}) {
  if (checkable) {
    return (
      <></>
      // <CheckableTagStyle
      //   checked={checked}
      //   size={size}
      //   add={add}
      //   onChange={onChange}
      //   {...props}
      // >
      //   {children}
      // </CheckableTagStyle>
    );
  }
  return (
    <TagStyle
      closable={closable}
      size={size}
      add={add}
      onClose={onClose}
      {...props}
    >
      {children}
    </TagStyle>
  );
}

Tag.propTypes = {
  checkable: t.bool,
  checked: t.bool,
  closable: t.bool,
  add: t.bool,
  size: t.oneOf(['small', 'medium', 'large']),
  onClose: t.func,
  onChange: t.func,
};

Tag.defaultProps = {
  checkable: false,
  checked: false,
  closable: false,
  size: 'medium',
  add: false,
  onClose: () => {},
  onChange: () => {},
};

export default Tag;
