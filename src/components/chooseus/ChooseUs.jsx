import React from "react";
import "./ChooseUs.css";
import img from "../../images/living-2882718_1920.jpg";

export default function ChooseUs() {
  return (
    <>
      <div className="container-fluid choose-us mb-5">
        <div className="row">
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="fs-1 fw-bold">Why Choose Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              delectus facere quam repellendus nisi unde. Non exercitationem
              beatae quidem enim.
            </p>
            <div className="row mt-5">
              <div className="col-sm">
                <div>
                  <i className="bi bi-truck fs-2" />
                </div>
                <h6>Fast &amp; Free Shipping</h6>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, ex.
                </p>
              </div>
              <div className="col-sm">
                <div>
                  <i className="bi bi-bag-check fs-2" />
                </div>
                <h6>Easy to Shop</h6>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, ex.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div>
                  <i className="bi bi-question-square fs-2" />
                </div>
                <h6>24/7 Support</h6>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, ex.
                </p>
              </div>
              <div className="col-sm">
                <div>
                  <i className="bi bi-shuffle fs-2" />
                </div>
                <h6>Hassle Free Returns</h6>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, ex.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pt-5 text-center">
            <img src={img} className="img-fluid rounded chooseUs-img" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
