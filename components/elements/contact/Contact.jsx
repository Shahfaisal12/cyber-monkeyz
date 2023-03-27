import React from "react";
import styleContact from "../../../styles/Contact.module.scss";

const Contact = () => {
  return (
    <>
      <div
        className={` ${styleContact.contact_section} overflow-hidden mb-5 mb-md-3`}
      >
        <div className={` ${styleContact.bg_title} position-relative`}>
          <div className="container">
            <div className=" h-100 position-absolute">
              <div className={`${styleContact.title} mt-4`} data-aos="fade-up">Contact us</div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path
              fill="#DFDEF5"
              fill-opacity="0.7"
              d="M0,256L60,224C120,192,240,128,360,96C480,64,600,64,720,53.3C840,43,960,21,1080,10.7C1200,0,1320,0,1380,0L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="container"  data-aos="fade-up">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center order-2 order-md-1">
              <div>
                <div className={styleContact.sub_title}>
                  Please fill out the information below{" "}
                  <br className="d-none d-md-block" /> and we'll be in touch
                  soon..
                </div>
                <div className={` ${styleContact.form_section} mt-4`}>
                  <form>
                    <div className="row">
                      <div className="mb-1">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="mb-1">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="mb-1">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="mb-1">
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                          placeholder="Company"
                        />
                      </div>
                      <div className="mb-1">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          placeholder="Type your meassage here..."
                        ></textarea>
                      </div>
                      <div className={`${styleContact.button_div} mt-3`}>
                        <button className={`${styleContact.btn_submit} btn`}>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="img-section"> {/*   */}
                <img
                  src="assets/head-left.png"
                  className="img-fluid"
                  width={400}
                  alt=""
                />

                <div className="text-content mx-5">
                  <h5 className="mb-3">
                    ...or simply <br /> reach out to us at:
                  </h5>
                  <p>
                    Phone: +31 6 41884661 <br />
                    info@cybermonkeyz.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
