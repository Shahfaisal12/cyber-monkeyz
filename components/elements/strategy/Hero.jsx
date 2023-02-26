import React from "react";

const Hero = () => {
  return (
    <div className="stategy-hero-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center">
            <div className="content-section">
              <div className="title"> Monkey see Monkey do..</div>
              <div className="sub-title">
                We analyse your data and learn what makes your business thrive
              </div>
              <div className="para mx-3 mx-md-5 my-5 my-md-5">
                <p>
                  What is your main focus? How will you stand out online? What
                  are your goals? When it comes to successful online growth,
                  establishing a strong foundation is key. Cyber Monkeyz
                  provides insights to help you make informed decisions about
                  your online strategy. We are here to support the growth of
                  your online business
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <div className="img-section d-flex justify-content-end">
              <img src="assets/half-monky-head.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
