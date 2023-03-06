import React from "react";
import styleabout from "../../../styles/about.module.scss";

const aboutData = [
    {
        img: 'assets/about/about-3.jpg',
        title: 'Our Mission',
        para1: `At Cyber Monkeyz, we do more than just providing innovative solutions to help your business be seen online. We're all about creating a meaningful connection between our clients and their audience, so we can grow and thrive together in today's digital landscape.`,
        para2: ` We're dedicated towards building strong relationships, exceeding expectations, and delivering results that will help your business reach it's full potential.`

    },
    {
        img: 'assets/about/about-1.jpeg',
        title: 'Our Team',
        para1: `We're a team of young professionals from diverse disciplines, who are experts in their fields. From digital marketing and social media management to web and software development, our team has the ability to make your business stand out.`,
        para2: `We love what what we do, and take full pride in staying up-to-date with the latest trends and tools to provide the best experience to our clients.`
    },
    {
        img: 'assets/about/about-2.jpg',
        title: 'Our Approach',
        para1: `At Cyber Monkeyz, we believe in working closely with our clients to understand their specific needs and develop customized solutions that exceed their expectations. We take the time to listen in and fully understand your challenges and goals before starting any project, allowing us to develop tailor-made solutions just for you.`,
        para2: `With great attention to detail, out of the box thinking, and commitment to high quality content; we strive to stand second to none when it comes to providing you with the best possible service.`
    },
]

const Hero = () => {
    return (
        <div className={` ${styleabout.about_section}`}>
            <div className={` ${styleabout.bg_title} py-3`}>
                <div className="container">
                    <div className={styleabout.title}>About us</div>
                </div>
            </div>
            <div className="container pt-4">
                <div className="row">
                    {aboutData.map((item, index) => (
                        <div className="row" key={index}>
                            {index % 2 === 0 ? (
                                <>
                                    <div className="col-md-6 my-5 d-flex align-items-center">
                                        <img
                                            src={item.img}
                                            alt="Avatar"
                                            className={` ${styleabout.image} img-fluid`}
                                        />
                                    </div>
                                    <div className="col-md-6 my-5 d-flex align-items-center">
                                        <div className={styleabout.content_sec}>
                                            <h6>{item.title}</h6>
                                            <p>{item.para1}</p>
                                            <p>{item.para2}</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-md-6 my-5 d-flex align-items-center">
                                        <div className={styleabout.content_sec}>
                                            <h6>{item.title}</h6>
                                            <p>{item.para1}</p>
                                            <p>{item.para2}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-5 d-flex align-items-center">
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
