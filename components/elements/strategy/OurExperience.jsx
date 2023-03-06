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
        path: "Content",
    },
    {
        image: "assets/home/CreativeWork.jpg",
        title: "Marketing",
        items: ["Social Media", "Campaigning", "Email", "Analytics"],
        path: "Marketing",
    },
];

const OurExperience = () => {
    return (
        <>
            <div className={`${styleExperience.ourExperience_section} py-5`}>
                <div className="container-fluid">
                    <div className="row justify-content-center" >
                        <div className="col-12 col-md-4">
                            <h1 className={` ${styleExperience.title} text-center`} data-aos="fade-right">Our Expertise..</h1>
                        </div>
                        <div className="col-12 col-md-8 mt-3 mt-md-0">
                            <div className="row">
                                {overService.map((list, index) => (
                                    <div className="col-md-4  mt-4 mt-md-5" key={index}>
                                        <Link href={`/${list.path}`} passHref>
                                            <div
                                                className={` ${styleExperience.our_service} position-relative`}
                                                data-aos="flip-left"
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
            </div >

        </>
    )
}

export default OurExperience