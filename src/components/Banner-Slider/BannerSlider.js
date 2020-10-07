import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerSlider.styles.scss";

export default function BannerSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner-slider-container">
      <Slider {...settings}>
        <div className="banner">
          <h3>1</h3>
        </div>
        <div className="banner">
          <h3>2</h3>
        </div>
        <div className="banner">
          <h3>3</h3>
        </div>
        <div className="banner">
          <h3>4</h3>
        </div>
        <div className="banner">
          <h3>5</h3>
        </div>
        <div className="banner">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
