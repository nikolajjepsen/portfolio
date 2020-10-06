import React from 'react';
import Slider from 'react-slick';

const Carousel = ({ children }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
