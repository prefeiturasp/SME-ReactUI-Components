import React from 'react';
import { Carousel } from '~/components';
import DefaultImg from './default-img.jpeg';

export default {
  title: 'Components|Carousel',
  component: Carousel,
};

export const Default = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };   

    const items = [
        DefaultImg,
        'https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    ];

    return (
        <Carousel 
            afterChange={onChange} 
            beforeChange={onChange}
            items={items} 
            height={300} 
            objectFit={'cover'}
        />
    )  
};

Default.story = { name: 'default' };
