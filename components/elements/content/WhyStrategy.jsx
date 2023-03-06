import React from "react";
import styleStrategy from "../../../styles/stategy.module.scss";

const WhyStrategy = () => {
  return (
    <div className={` ${styleStrategy.whyStrategy_section} pt-5 pb-0 pb-md-5`}>
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
                If you aim to stand out amidst crowded search engines. Keep engaging your target audience with unique and captivating content. And get recognised as the top player in your field; we can help you achieve that.
                </p>
                <p data-aos="fade-up-left">
                How come? By tailoring the right blogs, copy, photos and videos specific to any time or related to your business and audiences. There is no one size fits all when it comes to content, and we aspire to bring your vision to life.
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
