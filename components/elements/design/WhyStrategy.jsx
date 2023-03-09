import React from "react";
import styleStrategy from "../../../styles/stategy.module.scss";

const WhyStrategy = () => {
  return (
    <div className={` ${styleStrategy.whyStrategy_section}`}  data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className={styleStrategy.img_section} > {/* data-aos="zoom-in" */}
              <img src="assets/monkey-head.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0 d-flex align-items-center">
            <div className={styleStrategy.content_section}>
              <div className={styleStrategy.title}> {/* data-aos="fade-right" */}
                {" "}
                Why us?
              </div>
              <div className={styleStrategy.para}>
                <p className="my-3 my-md-5" > {/* data-aos="fade-left" */}
                  We will work closely with you to craft a refreshing brand
                  identity that includes an engaging web design and a functional
                  visual & UX design. We specialise in both; back-end and
                  front-end development. From web development to software and
                  app development, we do it all.
                </p>
                <p> {/* data-aos="fade-up-left" */}
                  Why us? We will work closely with you to craft a refreshing
                  brand identity that includes an engaging web design and a
                  functional visual & UX design. We specialise in both; back-end
                  and front-end development. From web development to software
                  and app development, we do it all. ​ Our team of experts excel
                  in developing designs that hit the mark on all fronts. Cyber
                  Monkeyz will turn visiting your business online into the
                  ultimate customer journey.
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
