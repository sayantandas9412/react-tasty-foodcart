import React from "react";
import "./MainSection.styles.scss";

import BannerSlider from "../Banner-Slider/BannerSlider";

export default function MainSection() {
  return (
    <div className="main-section">
      <BannerSlider />
    </div>
  );
}
