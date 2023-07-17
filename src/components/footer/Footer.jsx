import React, { useState } from "react";
import sofa from "../../images/sofa.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Footer() {
  const [sub, setSub] = useState({ name: "", email: "" });
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSub((values) => ({ ...values, [name]: value }));
  };

  const handleSubscribe = () => {
    if (sub.name !== "" && sub.email !== "") {
      toast.success("Email Subscribed");
      setSub({ name: "", email: "" });
    } else {
      toast.error("Please Enter Your Name and Email");
    }
  };
  return (
    <>
      <div
        className="container-fluid py-5 bg-white"
        style={{ fontFamily: "ui-serif" }}
      >
        <div className="row">
          {/* Subscription form */}
          <div className="col-lg-7 pt-5">
            <h5 className="mb-3 fs-4 fw-semibold news-letter-heading">
              <i className="bi bi-envelope fs-4"></i> Subscribe to Newsletter
            </h5>
            <div className="row">
              <div className="col-lg-5 col-sm-12 text-center input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border border-secondary py-2 px-3 rounded mb-3"
                  style={{ width: 270 }}
                  name="name"
                  value={sub.name}
                  onChange={handleOnChange}
                />
              </div>
              <div className="col-lg-5 col-sm-12 text-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-secondary py-2 px-3 rounded mb-3"
                  name="email"
                  value={sub.email}
                  onChange={handleOnChange}
                  style={{ width: 270 }}
                />
              </div>
              <div className="col-lg-2 col-sm-12 btn-div ms-0 ps-0">
                <button
                  className="py-2 px-4 btn"
                  style={{ background: "#355033" }}
                  onClick={() => handleSubscribe()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send-fill text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* footer sofa image */}
          <div className="col-lg-5 text-center">
            <img src={sofa} alt="" style={{ maxWidth: 300, maxHeight: 300 }} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 px-5 text-justify">
            <h1 className="fw-bold" style={{ color: "#355033" }}>
              Furni.
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              iusto corporis enim quibusdam unde minima ratione exercitationem
              voluptatem quo modi atque architecto omnis iste, possimus
              praesentium autem cumque temporibus?
            </p>
            <div>
              <span className="bg-silver mx-2 fs-5">
                <Link
                  target="_blank"
                  to="https://www.facebook.com/profile.php?id=100047880797925"
                >
                  <i
                    className="bi bi-facebook"
                    style={{ color: "#32564c" }}
                  ></i>
                </Link>
              </span>
              <span className="bg-silver mx-2 fs-5">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/muhammad-shoaib-mern-stack-developer/"
                >
                  <i className="bi bi-twitter" style={{ color: "#32564c" }}></i>
                </Link>
              </span>
              <span className="bg-silver mx-2 fs-5">
                <Link
                  target="_blank"
                  to="https://www.instagram.com/iam_shoaibmemon/"
                >
                  <i
                    className="bi bi-instagram"
                    style={{ color: "#32564c" }}
                  ></i>
                </Link>
              </span>
              <span className="bg-silver mx-2 fs-5">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/muhammad-shoaib-mern-stack-developer/"
                >
                  <i
                    className="bi bi-linkedin"
                    style={{ color: "#32564c" }}
                  ></i>
                </Link>
              </span>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 pt-3 text-center">
            <p>
              <a href="/aboutus" className="text-decoration-none text-dark">
                About us
              </a>
            </p>
            <p>
              <a href="/services" className="text-decoration-none text-dark">
                Services
              </a>
            </p>
            <p>
              <a href="/blog" className="text-decoration-none text-dark">
                Blog
              </a>
            </p>
            <p>
              <a href="/contact" className="text-decoration-none text-dark">
                Contact us
              </a>
            </p>
          </div>
          <div className="col-lg-2 col-sm-6 pt-3 text-center">
            <p>
              <a href="/support" className="text-decoration-none text-dark">
                Support
              </a>
            </p>
            <p>
              <a href="/knowledge" className="text-decoration-none text-dark">
                Knowledge base
              </a>
            </p>
            <p>
              <a href="/chat" className="text-decoration-none text-dark">
                Live Chat
              </a>
            </p>
          </div>
          <div className="col-lg-2 col-sm-6 pt-3 text-center">
            <p>
              <a href="/jobs" className="text-decoration-none text-dark">
                Jobs
              </a>
            </p>
            <p>
              <a href="/team" className="text-decoration-none text-dark">
                Our team
              </a>
            </p>
            <p>
              <a href="/leadership" className="text-decoration-none text-dark">
                Leadership
              </a>
            </p>
            <p>
              <a href="/privacy" className="text-decoration-none text-dark">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="col-lg-2 pt-3 text-center">
            <p>
              <a href="/products" className="text-decoration-none text-dark">
                Nordic Chair
              </a>
            </p>
            <p>
              <a href="/products" className="text-decoration-none text-dark">
                Kruzo Aero
              </a>
            </p>
            <p>
              <a href="/products" className="text-decoration-none text-dark">
                Ergonomic Chair
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div className="container d-flex justify-content-between">
          <p>Copyright ©2023. All Rights Reserved. — Designed with love.</p>
          <p>
            <a
              href="/terms&conditions"
              className="text-decoration-none text-dark mx-2"
            >
              Terms & Conditions
            </a>
            <a href="/privacy" className="text-decoration-none text-dark mx-2">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
