import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

// Ant
import { Carousel } from 'antd';

export const CarouselStyle = styled(Carousel)`
    img {
        object-fit: ${(props) => props.objectFit} !important;   
        height: ${(props) => props.height}px !important;  
    }

    &.slick-slider {
        height: ${(props) => props.height}px !important; 
    }

    .slick-arrow {
        background: #343434;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        padding: 10px;
    }
    .slick-prev {
        inset-inline-start: 0px !important;
    }
    .slick-next {
        inset-inline-end: 0px !important;
    }    
`;

export const CarouselItemStyle = styled.img``;


export const ArrowLeft = <Icon type="solid" color="light" icon="fa-chevron-left"/>;
export const ArrowRight = <Icon type="solid" color="light" icon="fa-chevron-right"/>;

