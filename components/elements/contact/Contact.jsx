import React from "react";
import styleContact from "../../../styles/Contact.module.scss";

const Contact = () => {
  return (
    <>
      <div className={` ${styleContact.contact_section}`}>
        <div className={` ${styleContact.bg_title} py-3`}>
          <div className="container">
            <div className={styleContact.title}>Contact us</div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4 d-flex align-items-center">
              <div>
                <div className={styleContact.sub_title} data-aos="fade-right">
                  Please fill out the information below <br /> and we'll be in
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
                      <div className={ `${styleContact.button_div} mt-5`}>
                      <button className={ `${styleContact.btn_submit} btn`}>Submit</button>
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
