import * as React from 'react';
import t from 'prop-types';

// Estilos
import { ButtonStyle, ButtonGroupStyle } from './styles';

/**
 * `import { Button } from "@sme/secretui"`
 *
 * Os botões expressam qual ação ocorrerá quando o usuário clicar nela. Os botões são usados ​​para inicializar uma ação e alguns exemplos incluem ações como Adicionar, Salvar e Excluir.
 *
 * # Boas práticas de uso
 * - Não use os botões como elementos de navegação. Em vez disso, use Links, pois leva o usuário a uma nova página e não está associado a uma ação.
 * - Os rótulos de botão informam aos usuários o que acontecerá quando clicarem no botão. Use verbos que descrevam a ação, como Adicionar ou Excluir . Use letras maiúsculas no estilo de sentença (apenas a primeira palavra em uma frase e quaisquer nomes próprios em maiúscula) e não mais que três palavras para os rótulos dos botões.
 * - Para Conjuntos de botões, use etiquetas específicas, como Salvar ou Descartar , em vez de usar OK e Cancelar . Isso é particularmente útil quando o usuário está confirmando uma ação.
 */
const Button = React.forwardRef(
  (
    {
      children,
      type = 'filled',
      color = 'primary',
      size,
      shape,
      icon,
      block,
      loading,
      disabled,
      style,
      onClick,
    },
    ref
  ) => {

    const types =  {
      text: 'text',
      filled: 'primary',
      outlined: 'outlined',
      link: 'link'
    };

    return (
      <ButtonStyle
        type={types[type] ? types[type] : types.filled}
        color={color}
        size={size}
        shape={shape}
        block={block}
        onClick={onClick}
        loading={loading}
        disabled={disabled}
        style={style}
      >
        {icon}
        {React.Children.count(children) > 0 && (
          <span className="button__content">{children}</span>
        )}
      </ButtonStyle>
    );
  }
);

Button.propTypes = {
  type: t.oneOf(['filled', 'outlined', 'text', 'link']),
  size: t.oneOf(['small', 'default', 'large']),
  color: t.oneOf(['primary', 'secondary']),
  icon: t.oneOfType([t.element, t.elementType, t.string, t.bool]),
  block: t.bool,
  loading: t.bool,
  disabled: t.bool,
  style: t.object,
  onClick: t.func,
};

Button.defaultProps = {
  type: 'filled',
  size: 'default',
  icon: false,
  block: false,
  loading: false,
  disabled: false,
  style: null,
  onClick: () => {},
};

const ButtonGroup = ({ children }) => (
  <ButtonGroupStyle>{children}</ButtonGroupStyle>
);

Button.Group = ButtonGroup;
export default Button;
