import React from "react";
import "./Carousel.css";
import Img1 from "../../images/c-1.jpg";
import Img2 from "../../images/2.avif";
import Img3 from "../../images/3.avif";
// import Img4 from "../../images/4.avif";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active c-item" data-bs-interval={1000}>
            <img src={Img1} className="d-block w-100 c-img" alt="..." />
          </div>
          <div className="carousel-item c-item" data-bs-interval={1000}>
            <img src={Img2} className="d-block w-100 c-img" alt="..." />
          </div>
          <div className="carousel-item c-item">
            <img src={Img3} className="d-block w-100 c-img" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
