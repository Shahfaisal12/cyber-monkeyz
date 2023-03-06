import React from 'react'
import styleWork from '../../../styles/Home.module.scss'


const images = [
    { id: '1', img: 'assets/home/Logo-1.png' },
    { id: '2', img: 'assets/home/Logo-2.png' },
    { id: '3', img: 'assets/home/Logo-3.png' },
    { id: '4', img: 'assets/home/Logo-4.png' },
    { id: '5', img: 'assets/home/Logo-5.png' },
    { id: '6', img: 'assets/home/Logo-6.png' },
]


const OurWork = () => {
    return (
        <div className={`${styleWork.ourWork_section} py-5 `}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h1 className={`${styleWork.title} mb-5 `} data-aos="fade-up-right">Our Work..</h1>
                        <div className="row">
                            {images.map((item) => (
                                <div className="col-md-4 mt-4">
                                    <div className={styleWork.bg_img} key={item.id} data-aos="fade-up">
                                        <img src={item.img} className='img-fluid' alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWork