import React from "react";
import styleabout from "../../../styles/about.module.scss";

const aboutData = [
  {
    img: "assets/about/about-3.jpg",
    title: "Our Mission",
    para1: `At Cyber Monkeyz, we do more than just providing innovative solutions to help your business be seen online. We're all about creating a meaningful connection between our clients and their audience, so we can grow and thrive together in today's digital landscape.`,
    para2: ` We're dedicated towards building strong relationships, exceeding expectations, and delivering results that will help your business reach it's full potential.`,
  },
  {
    img: "assets/about/about-1.jpeg",
    title: "Our Team",
    para1: `We're a team of young professionals from diverse disciplines, who are experts in their fields. From digital marketing and social media management to web and software development, our team has the ability to make your business stand out.`,
    para2: `We love what what we do, and take full pride in staying up-to-date with the latest trends and tools to provide the best experience to our clients.`,
  },
  {
    img: "assets/about/about-2.jpg",
    title: "Our Approach",
    para1: `At Cyber Monkeyz, we believe in working closely with our clients to understand their specific needs and develop customized solutions that exceed their expectations. We take the time to listen in and fully understand your challenges and goals before starting any project, allowing us to develop tailor-made solutions just for you.`,
    para2: `With great attention to detail, out of the box thinking, and commitment to high quality content; we strive to stand second to none when it comes to providing you with the best possible service.`,
  },
];

const Hero = () => {
  return (
    <div className={` ${styleabout.about_section} overflow-hidden`}>
      <div className={` ${styleabout.bg_title} position-relative`}>
        <div className="container">
          <div className="h-100 d-flex align-items-center position-absolute">
            <div className={` ${styleabout.title}`}>About us</div>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#DFDEF5"
            fill-opacity="1"
            d="M0,256L120,256C240,256,480,256,720,213.3C960,171,1200,85,1320,42.7L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="row">
          {aboutData.map((item, index) => (
            <div
              className={`row ${index === 0 ? "" : "my-4 my-md-5"}`}
              key={index}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-6 d-flex align-items-center">
                    <img
                      src={item.img}
                      alt="Avatar"
                      className={` ${styleabout.image} img-fluid`}
                    />
                  </div>
                  <div className="col-md-6 my-4 my-md-5 d-flex align-items-center">
                    <div className={styleabout.content_sec}>
                      <h6>{item.title}</h6>
                      <p>{item.para1}</p>
                      <p className="mb-0">{item.para2}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 my-4 my-md-5 d-flex align-items-center">
                    <div className={styleabout.content_sec}>
                      <h6>{item.title}</h6>
                      <p>{item.para1}</p>
                      <p className="mb-0">{item.para2}</p>
                    </div>
                  </div>
                  <div className="col-md-6 my-4 my-md-5 d-flex align-items-center">
                    <img
                      src={item.img}
                      alt="Avatar"
                      className={` ${styleabout.image} img-fluid`}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
