import React from 'react';
// Estilos
import { ArrowLeft } from '../styles';

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        {ArrowLeft}
    </div>
    );
}