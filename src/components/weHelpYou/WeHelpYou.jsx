import React from "react";
import "./WeHelpYou.css";
import imgGrid1 from "../../images/img-grid-1.jpg";
import imgGrid2 from "../../images/img-grid-2.jpg";
import imgGrid3 from "../../images/img-grid-3.jpg";

export default function WeHelpYou() {
  return (
    <>
      <div
        className="container-fluid py-5 mt-5"
        style={{ background: "#F6F0F0", fontFamily: "ui-serif" }}
      >
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12 h-100 mb-4">
            <img src={imgGrid1} alt="" className="large-img" />
            <img src={imgGrid2} alt="" className="small-img " />
            <img src={imgGrid3} alt="" className="small-img2" />
          </div>
          <div className="col-lg-5 h-100 pe-3 py-2">
            <h2 className="help-text fw-bold fs-1">
              We Help You Make Modern Interior Design
            </h2>
            <p className="help-text">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-6-col-sm-6 help-col">
                <p>
                  <i className="bi bi-circle-fill fw-bold fs-6"></i> Lorem ipsum
                  dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="col-lg-6 col-md-6-col-sm-6 help-col">
                <p>
                  <i className="bi bi-circle-fill fw-bold fs-6"></i> Lorem ipsum
                  dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="col-lg-6 col-md-6-col-sm-6 help-col">
                <p>
                  <i className="bi bi-circle-fill fw-bold fs-6"></i> Lorem ipsum
                  dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="col-lg-6 col-md-6-col-sm-6 help-col">
                <p>
                  <i className="bi bi-circle-fill fw-bold fs-6"></i> Lorem ipsum
                  dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
