import React from 'react';
import t from 'prop-types';

// Components
// import { Icon } from '~/components';

// Styles
import { ModalStyle, CloseIcon } from './styles';

function Modal({ children, visible, title, width, footer, onCancel }) {
  return (
    <ModalStyle
      visible={visible}
      title={title}
      width={width}
      closeIcon={CloseIcon}
      footer={footer}
      onCancel={onCancel}
    >
      {children}
    </ModalStyle>
  );
};

Modal.propTypes = {
  visible: t.bool,
  title: t.string,
  width: t.oneOfType([t.string, t.number]),
  footer: t.any,
  onCancel: t.func,
};

Modal.defaultProps = {
  visible: false,
  title: "",
  width: 520,
  onCancel: () => {}
};

export default Modal;
