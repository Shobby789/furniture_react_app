import React from "react";
import "./Testimonials.css";
import silverBg from "../../images/testimonial-bg.png";
import profileImg from "../../images/profile4.jpg";

export default function Testimoials() {
  return (
    <>
      <div
        id="hero-carousel"
        className="carousel carousel-dark slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner" style={{ fontFamily: "ui-serif" }}>
          <div className="carousel-item active c-item" data-bs-interval={2000}>
            <img src={silverBg} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h1 className="testimonial-heading fw-bold">Testimonials</h1>
              <p className="testimonial-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                nostrum eos harum temporibus commodi, praesentium officia optio
                quidem sit corporis. Veniam magni exercitationem tempora nobis
                eaque incidunt itaque ab? Odio?
              </p>
              <img src={profileImg} className="profile rounded-pill" alt="" />
              <h5 className="userName">Maria Jones</h5>
              <p className="designation">CEO, Co-Founder, XYZ Inc.</p>
            </div>
          </div>
          <div className="carousel-item  c-item" data-bs-interval={3000}>
            <img src={silverBg} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h1 className="testimonial-heading fw-bold">Testimonials</h1>
              <p className="testimonial-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                nostrum eos harum temporibus commodi, praesentium officia optio
                quidem sit corporis. Veniam magni exercitationem tempora nobis
                eaque incidunt itaque ab? Odio?
              </p>
              <img src={profileImg} className="profile rounded-pill" alt="" />
              <h5 className="userName">Maria Jones</h5>
              <p className="designation">CEO, Co-Founder, XYZ Inc.</p>
            </div>
          </div>
          <div className="carousel-item  c-item">
            <img src={silverBg} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h1 className="testimonial-heading fw-bold">Testimonials</h1>
              <p className="testimonial-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                nostrum eos harum temporibus commodi, praesentium officia optio
                quidem sit corporis. Veniam magni exercitationem tempora nobis
                eaque incidunt itaque ab? Odio?
              </p>
              <img src={profileImg} className="profile rounded-pill" alt="" />
              <h5 className="userName">Maria Jones</h5>
              <p className="designation">CEO, Co-Founder, XYZ Inc.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
