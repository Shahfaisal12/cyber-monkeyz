import React from "react";
import styleContact from "../../../styles/Contact.module.scss";

const Contact = () => {
  return (
    <>
      <div className={` ${styleContact.contact_section} overflow-hidden`}>
        <div className={` ${styleContact.bg_title} position-relative`}>
          <div className="container">
            <div className=" h-100 d-flex align-items-center position-absolute">
              <div className={`${styleContact.title}`}>Contact us</div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#DFDEF5" fill-opacity="1" d="M0,256L120,256C240,256,480,256,720,213.3C960,171,1200,85,1320,42.7L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>

        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <div className={styleContact.sub_title} data-aos="fade-right">
                  Please fill out the information below <br className="d-none d-md-block" /> and we'll be in
                  touch soon..
                </div>
                <div className={` ${styleContact.form_section} mt-4`}>
                  <form>
                    <div className="row">
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                          placeholder="Company"
                        />
                      </div>
                      <div className="mb-2">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          placeholder="Type your meassage here..."
                        ></textarea>
                      </div>
                      <div className={`${styleContact.button_div} mt-5`}>
                        <button className={`${styleContact.btn_submit} btn`}>Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-section" data-aos="fade-up">
                <img src="assets/head-left.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
