import React from 'react';
import t from 'prop-types';
// Estilos
import { CarouselStyle, CarouselItemStyle } from './styles';
// Components 
import { SampleNextArrow } from './components/SampleNextArrow';
import { SamplePrevArrow } from './components/SamplePrevArrow';
/**
 * `import { Carousel } from "@sme/secretui"`
 * 
 * Permite que diversas imagens sejam exibidas, um por vez, em sequência na tela. O número de itens é mostrado através dos indicadores na parte inferior e o controle pode ser feito pelos botão nos cantos do componente.
 * 
 */
function Carousel({ 
    items, 
    height, 
    objectFit,
    autoplay,
    afterChange,
    beforeChange
}) {
    
    return (
        <CarouselStyle
            objectFit={objectFit}
            autoplay={autoplay}
            afterChange={afterChange}
            beforeChange={beforeChange}
            height={height}
            arrows={true}
            prevArrow={<SampleNextArrow/>}
            nextArrow={<SamplePrevArrow/>}
        >
        {items.map((img) => {
            return(
                <CarouselItemStyle src={img}></CarouselItemStyle>
            )
        })}
        </CarouselStyle>
    );
}

Carousel.propTypes = {
    items: t.array,
    height: t.number,
    objectFit: t.oneOf(['contain', 'cover', 'fill', 'inherit', 'initial', 'none', 'revert', 'scale-down', 'unset']),
    autoplay: t.bool,
    afterChange: t.func,
    beforeChange: t.func
  };
  
  Carousel.defaultProps = {
    items: [],
    objectFit: 'initial',
    autoplay: false,
    height: 400,
  };

export default Carousel;
