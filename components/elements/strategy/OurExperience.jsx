import React from 'react'


const overService = [
    { title: "Design", items: ["Brand identity", "Web design", "UX design", "Development front- & backend "] },
    { title: "Content", items: ["Copywriting", "Blog", "Photo", "Video"] },
    { title: "Marketing", items: ["Social Media", "Campaigning", "Email", "Analytics"] },

]

const OurExperience = () => {
    return (
        <>
            <div className='ourExperience-section py-5'>
                <div className="container">
                    <h1 className='title'>Our Expertise..</h1>
                    <div className="row justify-content-center">
                        {overService.map((list, index) => (
                            <div className="col-md-3 mt-3 mt-md-5" key={index}>
                                <div className="our-service">
                                    <div className="service-title mb-3">{list.title}</div>
                                    <ul>
                                        {list.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            <div className="footer-bg py-4 text-center">
            <button className="btn btn-talk">Talk to us</button>
            </div>
        </>
    )
}

export default OurExperience