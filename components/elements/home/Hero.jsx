import React, { useState } from "react";
import styleHero from "../../../styles/Home.module.scss";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className={` ${styleHero.Hero_section}`}>
      <div className={styleHero.curve} >
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center pt-5">
              <div className={styleHero.content_section}>
                <div className={styleHero.title}>
                  An <span>innovative, young-minded</span> &
                  <span>all-inclusive digital agency</span> that elevates your
                  business to new heights in today's online world
                </div>
                <div style={{ width: "400px" }}>
                  <div className={`${styleHero.button_div} mt-4`}>
                    <button
                      className={`${styleHero.btn_submit} btn`}
                      onClick={toggleText}
                    >
                      {showText ? "Less" : "More"}
                    </button>
                  </div>
                  {showText && (
                      <p className="text-white mt-3 mb-0">
                        As a true partner we will help you every step of the
                        way. Our team of experts will work together with you to
                        create the best solutions for your online growth.
                      </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <div className={styleHero.img_section}>
                <img src="assets/monkey1.png" className="img-fluid"  alt="" />
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 120 1440 110"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L80,154.7C160,149,320,139,480,154.7C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
