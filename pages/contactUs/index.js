import React from "react";

const index = () => {
    return (
        <>
            <div className="contactUs-section py-5">
                <div className="container">
                    <div className="contact text-white">Contact us</div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img-section">
                                <img
                                    src="assets/monkey-head.png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="title mb-4">How can we help you</h1>
                            <div className="para"><p>Want to explore your options as an organisation? or want ro schedule a meeting?
                                Then leave us your contact details, and we'll be intouch..</p>
                            </div>
                            <div className="mail-section mt-4">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mt-3">
                                            <div class="form-group row">
                                                <label for="inputName" class="col-sm-4 col-form-label">
                                                    Name:
                                                </label>
                                                <div class="col-sm-8">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="inputName"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-3">

                                            <div class="form-group row">
                                                <label for="inputEmail" class="col-sm-4 col-form-label">
                                                    Email:
                                                </label>
                                                <div class="col-sm-8">
                                                    <input
                                                        type="email"
                                                        class="form-control"
                                                        id="inputEmail"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-3">
                                            <div class="form-group row ">
                                                <label
                                                    for="inputCopanyName"
                                                    class="col-sm-4 col-form-label"
                                                >
                                                    Company name:
                                                </label>
                                                <div class="col-sm-8">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="inputCopanyName"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-3">
                                            <div class="form-group row">
                                                <label for="inputPhone" class="col-sm-4 col-form-label">
                                                    Phone:
                                                </label>
                                                <div class="col-sm-8">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="inputPhone"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">

                                            <div class="form-group mt-3">
                                                <label for="exampleFormControlTextarea1">Message:</label>
                                                <textarea
                                                    class="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows="5"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactUs-section-footer py-4">
                <div className="container">
                    <div className="para">Or simply contact us at..</div>
                    <div className="row mt-3 justify-content-center">
                        <div className="col-md-6 mt-3">
                            <div className="contact-footer p-3 d-flex flex-wrap justify-content-between">
                                <div className="">
                                    http://info@cybermonkey.net
                                </div>
                                <div className="">Phone: +31641884661</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
