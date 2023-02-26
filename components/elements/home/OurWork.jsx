import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const carsouselImage = [
    { id: '1', img: 'assets/monkey-head.png' },
    { id: '2', img: 'assets/monkey-head.png' },
    { id: '3', img: 'assets/monkey-head.png' },
    { id: '4', img: 'assets/monkey-head.png' },
    { id: '5', img: 'assets/monkey-head.png' },
    { id: '6', img: 'assets/monkey-head.png' },
    { id: '7', img: 'assets/monkey-head.png' },
    { id: '8', img: 'assets/monkey-head.png' },
]

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const OurWork = () => {
    return (
        <div className='ourWork-section py-5'>
            <div className="container">
                <h1 className='title mb-5'>Our Work..</h1>
                <div className="carousel-section">
                    <Carousel
                        arrows={false}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        // itemClass="carousel-item-padding-40-px"
                    >
                        {carsouselImage.map((item) => (
                            <div className='bg-img' key={item.id}>
                                <img src={item.img} className='img-fluid' alt="" />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default OurWork