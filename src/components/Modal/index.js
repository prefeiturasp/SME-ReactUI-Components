import React from 'react';
import t from 'prop-types';

// Styles
import { ModalStyle, CloseIcon } from './styles';

/**
 * `import { Modal } from "@sme/secretui"`
 * 
 * Os modais são usados ​​para exibir o conteúdo em uma camada acima do aplicativo. É usado nos casos em que você precisa visualizar, criar ou editar conteúdo, bem como mensagens de confirmação. Nenhuma outra informação na página principal deve ser acessada enquanto um modal estiver ativo.
 * 
 * # Boas práticas de uso
 * - Use modais com moderação, porque eles interrompem o fluxo de trabalho do usuário.
 * - O título deve refletir a ação ou botão que foi clicado pelo usuário.
 * - Deve ser descartado pressionando a tecla ESC, clicando / tocando fora da área modal e usando o ícone "x" no canto superior direito do modal.
 * - Mantenha o usuário focado no elemento anterior após fechar o modal.
 */
function Modal({ 
  children, 
  visible, 
  title, 
  width, 
  footer, 
  onCancel,
  ...props
}) {
  return (
    <ModalStyle
      visible={visible}
      title={title}
      width={width}
      closeIcon={CloseIcon}
      footer={footer}
      onCancel={onCancel}
      {...props}
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
  mask: t.bool,
  closable: t.bool,
  maskClosable: t.bool
};

Modal.defaultProps = {
  visible: false,
  title: "",
  width: 520,
  onCancel: () => {},
  mask: true,
  closable: true,
  maskClosable: true
};

export default Modal;
