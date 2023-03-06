import React from "react";
import styleStrategy from '../../../styles/stategy.module.scss'

const Hero = () => {
  return (
    <div className={` ${styleStrategy.stategy_hero_section} py-4`}>
      <div className="container">
        <div className="row">
          <p>Strategy</p>
          <div className="col-md-8 d-flex align-items-center">
            <div className={styleStrategy.content_section}>
              <div className={styleStrategy.title}> Monkey see monkey do..</div>
              <div className={styleStrategy.sub_title}>
                we analyse your data and learn what makes your business thrive
              </div>
              <div className={` ${styleStrategy.para} my-4`}>
                <p>
                  What is your main focus? How will you stand out online? What are your goals? When it comes to successful online growth, establishing a strong foundation is key. Cyber Monkeyz provides insights to help you make informed decisions about your online strategy. We are here to support the growth of your online business.
                </p>
              </div>
              <h6>Content, SEO, Social, Web, Campaigning</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
