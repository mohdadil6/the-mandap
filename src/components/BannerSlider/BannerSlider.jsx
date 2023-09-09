import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './BannerSlider.css';
import banner1 from '../../assests/banner (1).jpg';
import banner2 from '../../assests/banner (2).jpg';
import banner3 from '../../assests/banner (3).jpg';
import banner4 from '../../assests/banner (4).jpg';
import banner5 from '../../assests/banner (5).jpg';
import banner6 from '../../assests/banner (6).jpg';
import banner7 from '../../assests/banner (7).jpg';
import banner8 from '../../assests/banner (8).jpg';
import banner9 from '../../assests/banner (9).jpg';
import banner10 from '../../assests/banner (10).jpg';
import banner11 from '../../assests/banner (11).jpg';
import banner12 from '../../assests/banner (12).jpg';


const BannerSlider = () => {
  return (
    <div className="banner-slider-container">
      
      <Carousel
        showArrows={true}
        emulateTouch={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        <div>
          <img src={banner1} alt="Banner Slide 1" />
        </div>
        <div>
          <img src={banner2} alt="Banner Slide 2" />
        </div>
        <div>
          <img src={banner3} alt="Banner Slide 3" />
        </div>
        <div>
          <img src={banner4} alt="Banner Slide 4" />
        </div>
        <div>
          <img src={banner5} alt="Banner Slide 5" />
        </div>
        <div>
          <img src={banner6} alt="Banner Slide 6" />
        </div>
        <div>
          <img src={banner7} alt="Banner Slide 7" />
        </div>
        <div>
          <img src={banner8} alt="Banner Slide 8" />
        </div>
        <div>
          <img src={banner9} alt="Banner Slide 9" />
        </div>
        <div>
          <img src={banner10} alt="Banner Slide 10" />
        </div>
        <div>
          <img src={banner11} alt="Banner Slide 11" />
        </div>
        <div>
          <img src={banner12} alt="Banner Slide 12" />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
