import React from "react";
import styleServices from "../../../styles/Home.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRouter } from 'next/router';
import Link from 'next/link';

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
    path: "Development",
  },
  {
    image: "assets/home/LogoDesigning.jpeg",
    title: "Content",
    items: ["Copywriting", "Blog", "Photo", "Video"],
    path: "Content",
  },
  {
    image: "assets/home/CreativeWork.jpg",
    title: "Marketing",
    items: ["Social Media", "Campaigning", "Email", "Analytics"],
    path: "Marketing",
  },
];

const OurServices = () => {

  return (
    <div className={`${styleServices.ourServices_section} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className={styleServices.title} data-aos="fade-right">
              Our Services..
            </h1>
            <div className="row">
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
                      <div className={`${styleServices.service_title}  mb-3 `}>
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
            <div className="row mt-5">
              <p>
                We offer a wide range of{" "}
                <span>
                  digital solutions to help your businesses strive and prosper
                  online. Including: digital marketing, social media management,
                  SEO, content creation, web development,
                </span>{" "}
                and <span>software development</span>.
              </p>
              <p>
                Whether you're a small business just starting out, or a large
                corporation looking to expand your digital presence; we have the
                right skills and expertise to help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
