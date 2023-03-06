import React from "react";
import styleStrategy from "../../../styles/stategy.module.scss";

const Hero = () => {
  return (
    <div className={` ${styleStrategy.stategy_hero_section} py-4`}>
      <div className="container">
        <div className="row">
          <p>Content</p>
          <div className="col-md-8 d-flex align-items-center">
            <div className={styleStrategy.content_section}>
              <div className={styleStrategy.title}>Get your message across</div>
              <div className={styleStrategy.sub_title}>
                and leave a lasting impression..
              </div>
              <div className={` ${styleStrategy.para} my-4`}>
                <p>
                  Content is an essential component of online business, and a
                  well-planned strategy is crucial for growth and engagement.
                  Cyber Monkeyz got your back! We publish eye-catching and
                  effective content through a number of channels. As a strategic
                  digital agency; we put ourselves at your service and transform
                  your online message into a distinctive experience guaranteed
                  to engage your customers and increase retention.
                </p>
              </div>
              <h6>Copywriting, Blog, Photo, Video</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
