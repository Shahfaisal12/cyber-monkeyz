import React from "react";
import styleServices from "../../../styles/Home.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/router";
import Link from "next/link";

const overService = [
  {
    image: "assets/home/SportTactics.jpg",
    title: "Strategy",
    items: ["Content", "SEO", "Social", "Web"],
    path: "strategy",
  },
  {
    image: "assets/home/UX.jpg",
    title: "Design",
    items: ["Brand identity", "Web design", "UX design", "Development"],
    path: "design",
  },
  {
    image: "assets/home/LogoDesigning.jpeg",
    title: "Content",
    items: ["Copywriting", "Blog", "Photo", "Video"],
    path: "content",
  },
  {
    image: "assets/home/CreativeWork.jpg",
    title: "Marketing",
    items: ["Social Media", "Campaigning", "Email", "Analytics"],
    path: "marketing",
  },
];

const OurServices = () => {
  return (
    <>
      <div className={`${styleServices.ourServices_section} pb-5 mb-5 overflow-hidden`}>

        <div className="position-relative">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h1 className= "position-absolute text-dark h-100 d-flex align-items-center pb-4 pb-md-0"> {/*  data-aos="fade-right" */}
                  Services
                </h1>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270"><path fill="#C8EEF5" fill-opacity="1" d="M0,256L120,245.3C240,235,480,213,720,192C960,171,1200,149,1320,138.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        </div>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <p>
                  Cyber Monkeyz provide a wide range of digital solutions to
                  help your businesses strive and prosper online. Including:
                  digital marketing, social media management, SEO, content
                  creation, web development, and software development.
                </p>
                <p>
                  Whether you're a small business just starting out, or a large
                  corporation looking to expand your digital presence; we have
                  the right skills and expertise to help you achieve your goals.
                </p>
                {overService.map((list, index) => (
                  <div className="col-md-3  mt-3 mt-md-5" key={index}>
                    <Link href={`/${list.path}`} passHref>
                      <div
                        className={` ${styleServices.our_service} position-relative`}
                        data-aos="flip-left"
                      >
                        <div className={styleServices.img_sec}>
                          <img src={list.image} className="img-fluid" alt="" />
                        </div>
                        <div className={styleServices.overlay_dev}>
                          <div
                            className={`${styleServices.service_title}  mb-3 `}
                          >
                            {list.title}
                          </div>
                          <div>
                            <ul className="">
                              <div className="div">
                                {list.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>{item}</li>
                                ))}
                              </div>
                              <div className="arrow">
                                <HiOutlineArrowNarrowRight
                                  className="text-white"
                                  size={22}
                                />
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
