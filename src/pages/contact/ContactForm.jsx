import React, { useState } from "react";
import "./ContactForm.css";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [formDetail, setFormDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleOnChage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormDetail((values) => ({ ...values, [name]: value }));
  };

  const { firstName, lastName, email, message } = formDetail;
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (firstName !== "" && lastName !== "" && email !== "" && message !== "") {
      toast.success("Message sent Successfully");
    } else {
      toast.error("Please fill all the fields");
    }
  };
  return (
    <>
      <div className="container py-5 my-5">
        {/* <div className="row text-start text-center">
          <div className="col-lg-4 col-sm-12 mb-1">
            <p>
              <span
                className="pb-2 pt-2 px-3 rounded me-2 d-inline-block"
                style={{ background: "#0c3b2e" }}
              >
                <i class="bi bi-geo-alt-fill fs-5 text-white"></i>
              </span>
              43 Raymouth Rd. Baltemoer, London
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 mb-3">
            <a
              href="mailto:smshoaib2001@gmail.com"
              className="text-decoration-none text-dark"
            >
              <span
                className="pb-2 pt-2 px-3 rounded me-2 d-inline-block"
                style={{ background: "#0c3b2e" }}
              >
                <i class="bi bi-envelope-fill fs-5 text-white"></i>
              </span>
              smshoaib2001@gmail.com
            </a>
          </div>
          <div className="col-lg-4 col-sm-12 mb-3">
            <p>
              <span
                className="pb-2 pt-2 px-3 rounded me-2 d-inline-block"
                style={{ background: "#0c3b2e" }}
              >
                <i class="bi bi-telephone-fill fs-5 text-white"></i>
              </span>
              +923413549032
            </p>
          </div>
        </div> */}

        <div className="container py-5 mx-auto all-contact">
          <div>
            <p className="fs-6 fw-semibold">
              <span
                className="pb-2 pt-2 px-3 rounded me-2 d-inline-block"
                style={{ background: "#0c3b2e" }}
              >
                <i class="bi bi-geo-alt-fill fs-6 text-white"></i>
              </span>
              43 Raymouth Rd. Baltemoer, London
            </p>
          </div>
          <div>
            <a
              href="mailto:smshoaib2001@gmail.com"
              className="text-decoration-none text-dark fw-semibold"
            >
              <span
                className="pb-2 pt-2 px-3 rounded me-2 d-inline-block"
                style={{ background: "#0c3b2e" }}
              >
                <i class="bi bi-envelope-fill fs-6 text-white"></i>
              </span>
              smshoaib2001@gmail.com
            </a>
          </div>
          <div>
            <p className="fw-semibold">
              <span
                className="pb-2 pt-2 px-3 rounded me-2 d-inline-block"
                style={{ background: "#0c3b2e" }}
              >
                <i class="bi bi-telephone-fill fs-6 text-white"></i>
              </span>
              +923413549032
            </p>
          </div>
        </div>

        {/* form */}
        <div className="row">
          <form className="contact-form py-5 px-3" onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col-lg-6 col-sm-12 mb-3 mx-auto">
                <label for="exampleFormControlInput1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John"
                  name="firstName"
                  value={formDetail.firstName}
                  onChange={handleOnChage}
                />
              </div>
              <div className="col-lg-6 col-sm-12 mb-3 mx-auto">
                <label for="exampleFormControlInput1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Doe"
                  name="lastName"
                  value={formDetail.lastName}
                  onChange={handleOnChage}
                />
              </div>
            </div>

            <div className="col-lg-12 col-sm-12 email form-group mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="JohnDoe@gmail.com"
                name="email"
                value={formDetail.email}
                onChange={handleOnChage}
              />
            </div>
            <div className="col-lg-12 col-sm-12 textarea form-group mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control px-3 py-2 mb-4"
                id="exampleFormControlTextarea1"
                placeholder="Write a message here...."
                rows="3"
                name="message"
                value={formDetail.message}
                onChange={handleOnChage}
              ></textarea>
            </div>
            <div className="msg-btn">
              <button className="btn btn-dark rounded-pill fw-semibold py-2 px-4">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
