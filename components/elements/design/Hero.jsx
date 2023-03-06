import React from "react";
import styleStrategy from "../../../styles/stategy.module.scss";

const Hero = () => {
  return (
    <div className={` ${styleStrategy.stategy_hero_section} py-4`}>
      <div className="container">
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
  );
};

export default Hero;
