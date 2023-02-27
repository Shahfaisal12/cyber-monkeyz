import React from 'react'

const Hero = () => {
  return (
    <div className='Hero-section'>
      <div className="container">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center">
            <div className="content-section">
              <div className='title' data-aos="fade-down-right"> Welcome to Cyber Monkeyz! </div>
              <div className='sub-title py-4'  data-aos="fade-right">We're an innovative, young-minded and all-inclusive digital agency that will help your business strive and prosper in today's online world..</div>
              <div className="para mb-5 px-5"  data-aos="fade-up-right">
                <p>We provide <span className='span fw-bold fst-italic'>Strategy, Design, Content, and Marketing;</span> to elevate your online presence and help you achieve your digital goals.</p>
                <p> As your true partner we will help you every step of the way. Our team of experts will work together with you to create the best solutions for your online growth. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block">
          <div className="img-section">
          <img src="assets/monkey.png" className='img-fluid' alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero