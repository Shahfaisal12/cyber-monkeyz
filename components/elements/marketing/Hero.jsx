import React from "react";
import styleStrategy from "../../../styles/stategy.module.scss";

const Hero = () => {
  return (
    <div className="">
      <div className={` ${styleStrategy.stategy_hero_section} pt-4`}>
        <div className="container"  data-aos="fade-up">
          <div className="row">
            <p>Marketing</p>
            <div className="col-md-8 d-flex align-items-center">
              <div className={styleStrategy.content_section}>
                <div className={styleStrategy.title}>
                  We elevate your business
                </div>
                <div className={styleStrategy.sub_title}>
                  to the next level..
                </div>
                <div className={` ${styleStrategy.para} my-4`}>
                  <p>
                    What do you offer? How can you grow online with it? At Cyber
                    Monkeyz, we constantly seek opportunities to further develop
                    our clients' online presence market by effectively using
                    data and best practices within their respective industry. We
                    strategically allocate budgets according to how the most
                    business would be generated online. That way we can help
                    bring your business to new heights.
                  </p>
                </div>
                <h6>
                  Social Media, Campaigning, Email, SEO, Research, Analytics
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
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
