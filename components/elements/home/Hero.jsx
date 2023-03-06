import React from "react";
import styleHero from "../../../styles/Home.module.scss";

const Hero = () => {
  return (
    <div className={styleHero.Hero_section}>
      <div className={styleHero.curve}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center">
              <div className={styleHero.content_section}>
                <div className={styleHero.title} data-aos="fade-down-right">
                  An <span>innovative, young-minded</span> &
                  <span>all-inclusive digital agency</span> that elevates your
                  business to new heights in today's online world
                </div>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <div className={styleHero.img_section}>
                <img src="assets/monkey.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
