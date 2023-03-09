import React from "react";
import styleStrategy from '../../../styles/stategy.module.scss'

const Hero = () => {
  return (
    <div className=''>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130"><path fill="#C8EEF5" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,117.3C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </div>
    
  );
};

export default Hero;
