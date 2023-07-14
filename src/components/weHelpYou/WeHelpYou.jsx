import React from "react";
import "./WeHelpYou.css";
import imgGrid1 from "../../images/img-grid-1.jpg";
import imgGrid2 from "../../images/img-grid-2.jpg";
import imgGrid3 from "../../images/img-grid-3.jpg";

export default function WeHelpYou() {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ background: "#F6F0F0", fontFamily: "ui-serif" }}
      >
        <div className="row">
          <div className="col-lg-1 col-sm-0"></div>
          <div className="col-lg-4 col-sm-12">
            <img src={imgGrid1} alt="" className="w-100 help-img" />
          </div>
          <div className="col-lg-2 vstack gap-4">
            <img
              src={imgGrid2}
              alt=""
              className="img-thumbnail border border-light"
            />
            <img
              src={imgGrid3}
              alt=""
              className="img-thumbnail border border-light"
            />
          </div>
          <div className="col-lg-4">
            <h2 className="fw-bold">We Help You Make Modern Interior Design</h2>
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo quas atque dolore autem consequuntur harum debitis
              beatae! Minus nostrum officia consequuntur aspernatur quo eius
              similique? Maiores eligendi dolor ipsam hic. Quae dolores quo
              mollitia itaque culpa at odit totam delectus.
            </p>
            <div className="row">
              <div className="col-sm">
                <p>
                  <i className="bi bi-bullseye me-2"></i>Lorem ipsum dolor sit
                  amet consectetur elit.
                </p>
              </div>
              <div className="col-sm">
                <p>
                  <i className="bi bi-bullseye me-2"></i>Lorem ipsum dolor sit
                  amet consectetur elit.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <p>
                  <i className="bi bi-bullseye me-2"></i>Lorem ipsum dolor sit
                  amet consectetur elit.
                </p>
              </div>
              <div className="col-sm ">
                <p>
                  <i className="bi bi-bullseye me-2"></i>Lorem ipsum dolor sit
                  amet consectetur elit.
                </p>
              </div>
            </div>
            <button className="btn btn-dark rounded-pill px-3 pb-2 mt-2">
              Explore
            </button>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </>
  );
}
