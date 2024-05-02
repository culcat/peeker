import React from 'react';
import banner1 from '../assets/banner1.svg';
import banner2 from '../assets/banner2.svg';
import banner3 from '../assets/banner3.svg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classes from './Banners.module.css'
function Banners() {
    const isMobile = window.innerWidth <= 768; // Проверяем, является ли экран мобильным

    if (isMobile) {
        return (
            <Carousel showThumbs={false} showStatus={false} swipeable emulateTouch infiniteLoop>
                <div>
                    <img src={banner1} alt="" />
                </div>
                <div>
                    <img src={banner2} alt="" />
                </div>
                <div>
                    <img src={banner3} alt="" />
                </div>
            </Carousel>
        );
    } else {
        return (
            <div>
                <img className={classes.banner} src={banner1} alt="" />
                <img className={classes.banner} src={banner2} alt="" />
                <img className={classes.banner} src={banner3} alt="" />
            </div>
        );
    }
}

export default Banners;
