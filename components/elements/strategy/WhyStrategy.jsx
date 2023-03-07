import React from "react";
import styleStrategy from '../../../styles/stategy.module.scss'

const WhyStrategy = () => {
  return (
    <div className={` ${styleStrategy.whyStrategy_section}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className={styleStrategy.img_section} data-aos="zoom-in">
              <img src="assets/monkey-head.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0 d-flex align-items-center">
            <div className={styleStrategy.content_section}>
              <div className={styleStrategy.title} data-aos="fade-right">
                {" "}
                Why us?
              </div>
              <div className={styleStrategy.para}>
                <p className="my-3 my-md-5" data-aos="fade-left">
                  A well-defined strategy enables effective alignment of brand
                  identity, content, SEO, SEA, social media, web, and campaigns,
                  leading to optimal guidance and agility.
                </p>
                <p data-aos="fade-up-left">
                  At Cyber Monkeyz, we are dedicated to help brands and
                  companies excel in the digital world. We use the
                  aforementioned strategies to your advantage, that way you get
                  a competitive edge setting businesses apart in the digital
                  age. Our promise is to help our clients stand out in the
                  crowded online marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyStrategy;
