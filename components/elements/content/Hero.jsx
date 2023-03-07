import React from "react";
import styleStrategy from "../../../styles/stategy.module.scss";

const Hero = () => {
  return (
    <div className="">
      <div className={` ${styleStrategy.stategy_hero_section} pt-4`}>
        <div className="container">
          <div className="row">
            <p>Content</p>
            <div className="col-md-8 d-flex align-items-center">
              <div className={styleStrategy.content_section}>
                <div className={styleStrategy.title}>
                  Get your message across
                </div>
                <div className={styleStrategy.sub_title}>
                  and leave a lasting impression..
                </div>
                <div className={` ${styleStrategy.para} my-4`}>
                  <p>
                    Content is an essential component of online business, and a
                    well-planned strategy is crucial for growth and engagement.
                    Cyber Monkeyz got your back! We publish eye-catching and
                    effective content through a number of channels. As a
                    strategic digital agency; we put ourselves at your service
                    and transform your online message into a distinctive
                    experience guaranteed to engage your customers and increase
                    retention.
                  </p>
                </div>
                <h6>Copywriting, Blog, Photo, Video</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#C8EEF5"
          fill-opacity="1"
          d="M0,128L80,128C160,128,320,128,480,117.3C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
