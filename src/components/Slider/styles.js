import styled from 'styled-components';

// Ant
import { Slider } from 'antd';

export const SliderStyle = styled(Slider)` 
    .ant-slider-step {
        background-color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;
        opacity: 0.3;
    }

    .ant-slider-track {
        background-color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;
    }

    .ant-slider-handle::after {
        box-shadow: 0 0 0 2px ${(props) => props.theme?.Button.colors[props.color]?.default}66 !important;  
    }
    
    .ant-slider-handle:hover::after, :where(.css-dev-only-do-not-override-1km3mtt).ant-slider .ant-slider-handle:active::after, :where(.css-dev-only-do-not-override-1km3mtt).ant-slider .ant-slider-handle:focus::after {
        box-shadow: 0 0 0 4px ${(props) => props.theme?.Button.colors[props.color]?.default} !important;
    }
`;
