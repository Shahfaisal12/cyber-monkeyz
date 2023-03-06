import React from "react";
import styleStrategy from "../../../styles/stategy.module.scss";

const Hero = () => {
  return (
    <div className={` ${styleStrategy.stategy_hero_section} py-4`}>
      <div className="container">
        <div className="row">
          <p>Marketing</p>
          <div className="col-md-8 d-flex align-items-center">
            <div className={styleStrategy.content_section}>
              <div className={styleStrategy.title}>
                We elevate your business
              </div>
              <div className={styleStrategy.sub_title}>to the next level..</div>
              <div className={` ${styleStrategy.para} my-4`}>
                <p>
                  What do you offer? How can you grow online with it? At Cyber
                  Monkeyz, we constantly seek opportunities to further develop
                  our clients' online presence market by effectively using data
                  and best practices within their respective industry. We
                  strategically allocate budgets according to how the most
                  business would be generated online. That way we can help bring
                  your business to new heights.
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
  );
};

export default Hero;
