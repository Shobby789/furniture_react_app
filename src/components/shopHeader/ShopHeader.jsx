import React from "react";
import "./ShopHeader.css";

export default function ShopHeader({ title, paragraph }) {
  return (
    <>
      <div className="container-fluid shop-header ps-5">
        <h1
          className="text-white fw-semibold"
          style={{ fontFamily: "ui-serif", fontSize: "3rem" }}
          data-aos="fade-up"
        >
          {title}
        </h1>
        <p className="text-white text-start" data-aos="fade-up">
          {paragraph}
        </p>
        <div className="">
          <button
            className="btn btn-warning px-4 py-2 rounded-pill fw-bold mx-1 pb-2"
            data-aos="fade-up"
          >
            Shop Now
          </button>
          <button
            className="btn btn-outline-light px-4 py-2 rounded-pill fw-bold mx-1 pb-2"
            data-aos="fade-up"
          >
            Explore
          </button>
        </div>
      </div>
    </>
  );
}
