import Link from 'next/link';
import React from 'react'
import styleExperience from '../../../styles/stategy.module.scss';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const overService = [
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

const OurExperience = () => {
    return (
        <>
            <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><path fill="#C8EEF5" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,117.3C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className={`${styleExperience.ourExperience_section}`}>   
            <div className="container-fluid">
                    <div className="row justify-content-center" >
                        <div className="col-12 col-md-4">
                            <h1 className={` ${styleExperience.title} text-center`}>Our Expertise..</h1> {/*  data-aos="fade-right" */}
                        </div>
                        <div className="col-12 col-md-8 mt-3 mt-md-0">
                            <div className="row">
                                {overService.map((list, index) => (
                                    <div className="col-md-4  mt-4 mt-md-5" key={index}>
                                        <Link href={`/${list.path}`} passHref>
                                            <div
                                                className={` ${styleExperience.our_service} position-relative`}
                                              
                                            >
                                                <div className={styleExperience.img_sec}>
                                                    <img src={list.image} className="img-fluid" alt="" />
                                                </div>
                                                <div className={styleExperience.overlay_dev}>
                                                    <div
                                                        className={`${styleExperience.service_title}  mb-3 `}
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><path fill="#C8EEF5" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,117.3C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div >

        </>
    )
}

export default OurExperience