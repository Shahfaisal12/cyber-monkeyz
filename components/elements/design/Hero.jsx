import React from "react";
import styleStrategy from "../../../styles/stategy.module.scss";

const Hero = () => {
  return (
    <div className="">
<div className={` ${styleStrategy.stategy_hero_section} pt-5` }>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <p>Design</p>
          <div className="col-md-8 d-flex align-items-center">
            <div className={styleStrategy.content_section}>
              <div className={styleStrategy.title}>
                Let's create something Outstanding,
              </div>
              <div className={styleStrategy.sub_title}>together..</div>
              <div className={` ${styleStrategy.para} my-4`}>
                <p>
                  How will you position yourself? Who is your target audience?
                  And what would you like to convey? Cyber Monkeyz will create
                  logos, web designs, and websites that communicate the core
                  message of your business. Thinking outside the box, together
                  with our clients is our main satisfaction. As a result we
                  offer you the most authentic and distinctive branding/web
                  design that is guaranteed to resonate with your target
                  audience. We want to assist brands and companies differentiate
                  themselves in the digital world.
                </p>
              </div>
              <h6>
                Web Design, UX Design, Front-end Development, Back-end
                Development
              </h6>
            </div>
          </div>
        </div>
      </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130"><path fill="#C8EEF5" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,117.3C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </div>
  );
};

export default Hero;
