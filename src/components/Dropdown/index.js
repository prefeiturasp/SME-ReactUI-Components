import React from 'react';
import t from 'prop-types';

// Estilos
import { DropdownStyle, DropdownIconLeft, ArrowDown } from './styles';

/**
 * `import { Dropdown } from "@sme/secretui"`
 *
 * Dropdown é um elemento de interface que é similar a uma lista, que permite que o usuário escolha um valor de uma lista de opções.
 *
 */

function Dropdowns({
    children,
    items = [],
    type,
    color = 'primary',
    iconLeft,
    disabled,
    size,
    onClick,
}) {

    const menuProps = { items, onClick };

    const types =  {
        text: 'text',
        filled: 'primary',
        outlined: 'outlined',
    };

    return (
        <>
        <DropdownStyle 
            type={types[type] ? types[type] : types.filled}
            color={color}
            size={size}
            disabled={disabled}
            menu={menuProps} 
            placement="bottom" 
            icon={ArrowDown}
        >
            {iconLeft && <DropdownIconLeft icon={iconLeft}></DropdownIconLeft>}
            {children}
        </DropdownStyle>
        </>        
    );
}

Dropdowns.propTypes = {
    items: t.array,
    type: t.oneOf(['filled', 'outlined', 'text']),
    size: t.oneOf(['small', 'default', 'large']),
    color: t.oneOf(['primary', 'secondary']),
    disabled: t.bool,
};

Dropdowns.defaultProps = {
    items: [],
    type: 'filled',
    size: 'default',
    disabled: false,
};

export default Dropdowns;
