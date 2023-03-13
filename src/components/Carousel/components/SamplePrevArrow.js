import React from 'react';
// Estilos
import { ArrowRight } from '../styles';

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        {ArrowRight}
      </div>
    );
}