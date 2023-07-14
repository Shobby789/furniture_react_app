import React from "react";

export default function ServicesGrid() {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div>
              <i className="bi bi-truck fs-2" />
            </div>
            <h6>Fast &amp; Free Shipping</h6>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              ex.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div>
              <i className="bi bi-bag-check fs-2" />
            </div>
            <h6>Easy to Shop</h6>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              ex.
            </p>
          </div>
          <div className="col-lg-3">
            <div>
              <i className="bi bi-question-square fs-2" />
            </div>
            <h6>24/7 Support</h6>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              ex.
            </p>
          </div>
          <div className="col-lg-3">
            <div>
              <i className="bi bi-shuffle fs-2" />
            </div>
            <h6>Hassle Free Returns</h6>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              ex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
