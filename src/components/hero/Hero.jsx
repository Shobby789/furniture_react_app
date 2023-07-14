import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="container-fluid hero w-100">
        <div className="container pt-5 h-100">
          <h1 className="text-white heading-1 heading" data-aos="fade-up">
            Modern Furniture <br />
            Design Studio
          </h1>
          <p className="text-white mb-4 heading fw-normal" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            soluta? Velit voluptates architecto debitis dolor eos asperiores ad,
            ipsam dolore.
          </p>
          <div className="hero-btns">
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
      </div>
    </>
  );
}
