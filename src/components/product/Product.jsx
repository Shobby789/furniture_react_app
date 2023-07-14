import React from "react";
import product1 from "../../images/product-1.png";
import product2 from "../../images/product-2.png";
import product3 from "../../images/product-3.png";

export default function Product() {
  return (
    <>
      <div
        className="container-fluid py-5 my-5"
        style={{ background: "#F6F0F0" }}
      >
        <div className="row">
          <div className="col-lg-4 text-end">
            <div
              className="card mb-3 border-light border-0 mx-auto"
              style={{ maxWidth: 300, background: "#F6F0F0" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product1}
                    className="img-fluid rounded-start mt-3 h-75"
                    style={{ background: "silver" }}
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div
                    className="card-body text-start"
                    style={{ fontSize: "14px" }}
                  >
                    <h6 className="card-title">Nordic Chair</h6>
                    <p className="card-text mb-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero.
                    </p>
                    <a href="/blog" className="text-decoration-none text-dark">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            {/* card2 */}
            <div
              className="card mb-3 border-light border-0 mx-auto"
              style={{ maxWidth: 330, background: "#F6F0F0" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product2}
                    className="img-fluid rounded-start mt-3 h-75"
                    style={{ background: "silver" }}
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div
                    className="card-body text-start"
                    style={{ fontSize: "14px" }}
                  >
                    <h6 className="card-title">Kruzo Aero Chair</h6>
                    <p className="card-text mb-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero.
                    </p>
                    <a href="/blog" className="text-decoration-none text-dark">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            {/* Card3 */}
            <div
              className="card mb-3 border-light border-0"
              style={{ maxWidth: 330, background: "#F6F0F0" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product3}
                    className="img-fluid rounded-start mt-3 h-75"
                    style={{ background: "silver" }}
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div
                    className="card-body text-start"
                    style={{ fontSize: "14px" }}
                  >
                    <h6 className="card-title">Ergonomic Chair</h6>
                    <p className="card-text my-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero.
                    </p>
                    <a href="/blog" className="text-decoration-none text-dark">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="container-fluid d-flex justify-content-center align-items-center flex-wrap"
          style={{ background: "#F6F0F0" }}
        >
         
          <div
            className="card mb-3 border-light border-0"
            style={{ maxWidth: 330, background: "#F6F0F0" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product2}
                  className="img-fluid rounded-start mt-3 h-75"
                  style={{ background: "silver" }}
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body" style={{ fontSize: "14px" }}>
                  <h6 className="card-title">Kruzo Aero Chair</h6>
                  <p className="card-text mb-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero.
                  </p>
                  <a href="/blog" className="text-decoration-none text-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div
            className="card mb-3 border-light border-0"
            style={{ maxWidth: 330, background: "#F6F0F0" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product3}
                  className="img-fluid rounded-start mt-3 h-75"
                  style={{ background: "silver" }}
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body" style={{ fontSize: "14px" }}>
                  <h6 className="card-title">Ergonomic Chair</h6>
                  <p className="card-text my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero.
                  </p>
                  <a href="/blog" className="text-decoration-none text-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
