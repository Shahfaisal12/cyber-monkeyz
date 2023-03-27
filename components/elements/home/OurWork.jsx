import React from "react";
import styleWork from "../../../styles/Home.module.scss";

const images = [
  { id: "1", img: "assets/home/Logo-1.png" },
  { id: "2", img: "assets/home/Logo-2.png" },
  { id: "3", img: "assets/home/Logo-3.png" },
  { id: "4", img: "assets/home/Logo-4.png" },
  { id: "5", img: "assets/home/Logo-5.png" },
  { id: "6", img: "assets/home/Logo-6.png" },
];

const OurWork = () => {
  return (
    <div className="mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 110">
        <path
          fill="#C8EEF5"
          fill-opacity="1"
          d="M0,128L80,128C160,128,320,128,480,149.3C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className={styleWork.ourWork_section}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h1 className={`${styleWork.title} mb-2 `}>Our Work..</h1>
              <div className="row">
                {images.map((item) => (
                  <div className="col-md-4 mt-4">
                    <div
                      className={`${styleWork.bg_img}`}
                      key={item.id}
                       
                    >
                      <img src={item.img} className="img-fluid" alt="" style={{objectFit: "cover"}}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 110">
        <path
          fill="#C8EEF5"
          fill-opacity="1"
          d="M0,128L80,128C160,128,320,128,480,149.3C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default OurWork;
