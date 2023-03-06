import React from "react";
import stylework from "../../../styles/work.module.scss";

const workData = [
    {
        img: 'assets/work/work-2.png',
        title: 'I’m an image title',
        para: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to `“Manage Media”`to add your content.'
    },
    {
        img: 'assets/work/work-7.png',
        title: 'I’m an image title',
        para: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to `“Manage Media”`to add your content.'
    },
    {
        img: 'assets/work/work-5.png',
        title: 'I’m an image title',
        para: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to `“Manage Media”`to add your content.'
    },
    {
        img: 'assets/work/work-6.jpg',
        title: 'I’m an image title',
        para: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to `“Manage Media”`to add your content.'
    },
    {
        img: 'assets/work/work-10.png',
        title: 'I’m an image title',
        para: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to `“Manage Media”`to add your content.'
    },
    {
        img: 'assets/work/work-8.jpg',
        title: 'I’m an image title',
        para: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to `“Manage Media”`to add your content.'
    },
    {
        img: 'assets/work/work-4.jpg',
        title: 'I’m an image title',
        para: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to `“Manage Media”`to add your content.'
    },
    {
        img: 'assets/work/work-9.png',
        title: 'I’m an image title',
        para: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to `“Manage Media”`to add your content.'
    },
    {
        img: 'assets/work/work-1.jpg',
        title: 'I’m an image title',
        para: 'Describe your image here. Use catchy text to tell people the story behind the photo. Go to `“Manage Media”`to add your content.'
    },

]

const Hero = () => {
    return (
        <div className={` ${stylework.work_section}`}>
            <div className={` ${stylework.bg_title} py-3`}>
                <div className="container">
                    <div className={stylework.title}>Latest Work</div>
                    <p>View some of our recent work</p>
                </div>
            </div>
            <div className="container pt-4">
                <div className="row">
                    {
                        workData.map((item, index) => (
                            <div className="col-md-6 mt-4" key={index}>
                                <div className={stylework.img_overlay}>
                                    <img
                                        src={item.img}
                                        alt="Avatar"
                                        className={stylework.image}
                                    />
                                    <div class={stylework.overlay}>
                                        <div class={stylework.text_sec}>
                                            <h6>{item.title}</h6>
                                            <p>{item.para}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Hero;
