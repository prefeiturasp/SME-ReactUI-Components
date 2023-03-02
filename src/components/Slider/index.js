import React from 'react';
import t from 'prop-types';

// Estilos
import { SliderStyle } from './styles';

/**
 * `import { Slider } from "@sme/secretui"`
 *
 * Slider é um controle usado para fazer seleção dentro de um intervalo de valores.
 */

function Slider({ 
    defaultValue,
    value,
    color = 'primary',
    max,
    min,
    marks,
    disabled,
    onChange
}) {
  return (
    <SliderStyle
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        max={max}
        min={min}
        marks={marks}
        color={color}
        onChange={onChange}
    />
  );
}

Slider.propTypes = {
    value: t.number,
    disabled: t.bool,
    color: t.oneOf(['primary', 'secondary', 'dark']),
    max: t.number,
    min: t.number,
    mask: t.object,
    onChange: t.func,
};

Slider.defaultProps = {
    disabled: false,
    color: 'primary',
    min: 0,
    max: 100,
    mask: {},
    onChange: () => {},
};

export default Slider;