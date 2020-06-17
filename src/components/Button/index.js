import * as React from 'react';
import t from 'prop-types';

// Ant
import { Button as BotaoAnt } from 'antd';

// Estilos
import { ButtonStyle, Teste } from './styles';

const Button = React.forwardRef(
  ({ children, type, size, shape, icon, outline, loading, disabled, onClick }, ref) => {
    return (
      <ButtonStyle
        type={type}
        size={size}
        shape={shape}
        outline={outline ? 1 : 0}
        onClick={onClick}
        loading={loading}
        disabled={disabled}
      >
        {icon}
        {children}
      </ButtonStyle>
    );
  }
);

Button.propTypes = {
  type: t.oneOf(['primary', 'secondary', 'dashed', 'link']),
  size: t.oneOf(['small', 'default', 'large']),
  shape: t.oneOf(['circle', 'circle-outline', 'default']),
  icon: t.oneOfType([t.element, t.elementType, t.string, t.bool]),
  outline: t.oneOfType([t.bool, t.string, t.number]),
  loading: t.bool,
  disabled: t.bool,
  onClick: t.func,
};

Button.defaultProps = {
  type: 'secondary',
  size: 'large',
  shape: null,
  icon: false,
  outline: false,
  loading: false,
  disabled: false,
  onClick: () => {},
};

Button.Group = ButtonStyle.Group;
export default Button;
