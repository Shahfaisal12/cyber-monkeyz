import React from "react";
import styleStrategy from "../../../styles/stategy.module.scss";

const WhyStrategy = () => {
  return (
    <div className={` ${styleStrategy.whyStrategy_section}`} data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className={styleStrategy.img_section}> {/*  data-aos="zoom-in" */}
              <img src="assets/monkey-head.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0 d-flex align-items-center">
            <div className={styleStrategy.content_section}>
              <div className={styleStrategy.title}> {/*  data-aos="fade-right" */}
                {" "}
                Why us?
              </div>
              <div className={styleStrategy.para}>
                <p className="my-3 my-md-5" > {/* data-aos="fade-left" */}
                  Cyber Monkeyz specialise in enhancing your online visibility.
                  Our team makes eye-catching content that aligns with your
                  proposition and conveys your message in the most effective
                  manner.
                </p>
                <p > {/* data-aos="fade-up-left" */}
                  We build compelling campaigns leveraging our know-how's in
                  sharp targeting through online analytics. We strategically
                  combine Social Media Advertising, SEO, and email marketing to
                  make the most out of all budget sizes. We give your brand the
                  edge it needs to stand out. And moreover leave an imprint on
                  the audience's mind.
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
