import React from 'react';
import t from 'prop-types';

// Components
import { Icon } from '~/components';

// Internal Components
import TextFieldSearch from './components/TextFieldSearch';
import TextFieldPassword from './components/TextFieldPassword';

// Styles
import { InputStyle, InputWrapperStyle } from './styles';

/**
 * `import { TextField } from "@sme/secretui"`
 *
 * O campo de texto permite ao usuário interagir com os dados de entrada. Eles normalmente são encontrados em um formulário, mas também podem fazer parte de um modal, pesquisa ou cartão.
 *
 * # Boas práticas de uso
 * - Os campos obrigatórios devem ser assinados com um asterisco vermelho. Se todos os campos forem obrigatórios, não há necessidade de exibir um asterisco em todos eles, mas a obrigatoriedade deve ser indicada na parte superior da página.
 * - A validação dos campos deve ocorrer em tempo real, facilitando a conclusão da tarefa pelos usuários ao preencher o formulário.
 */
function TextField({
  label,
  required,
  errorMessage,
  placeholder,
  disabled,
  id,
  maxLength,
  prefix,
  suffix,
  value,
  onChange,
  onPressEnter,
  allowClear
}) {
  return (
    <InputWrapperStyle required={required}>
      {label && <span className="label">{String(label)}</span>}
      <InputStyle
        prefix={prefix}
        placeholder={placeholder}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        onPressEnter={onPressEnter}
        allowClear={allowClear}
        suffix={
          (errorMessage && (
            <Icon type="solid" icon="fa-exclamation-circle" />
          )) ||
          suffix
        }
        className={errorMessage && `has-error`}
      />
      {errorMessage && (
        <span className="errorMessage">{String(errorMessage)}</span>
      )}
    </InputWrapperStyle>
  );
}

TextField.propTypes = {
  label: t.string,
  required: t.bool,
  errorMessage: t.string,
  placeholder: t.string,
  disabled: t.bool,
  id: t.string,
  maxLength: t.number,
  prefix: t.oneOfType([t.element, t.elementType, t.node]),
  suffix: t.oneOfType([t.element, t.elementType, t.node]),
  value: t.string,
  onChange: t.func,
  onPressEnter: t.func,
  allowClear: t.bool
};

TextField.Search = TextFieldSearch;
TextField.Password = TextFieldPassword;

export default TextField;
