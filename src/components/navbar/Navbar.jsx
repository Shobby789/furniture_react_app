import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.allCart);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-none w-100"
        style={{
          background: "#0c3b2e",
          zIndex: "100000",
          position: "absolute",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand text-white fs-1 fw-semibold ms-3"
            to="/"
          >
            Furni.
          </Link>
          <button
            className="navbar-toggler outline-none border-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon" /> */}
            <i className="bi bi-list fs-3 text-white outline-none border-none"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white px-4 fw-semibold"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white px-4 fw-semibold"
                  to="/shop"
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white px-4 fw-semibold"
                  to="/about"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white px-4 fw-semibold"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white px-4 fw-semibold"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white px-4 fw-semibold"
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <Link
                    className="nav-link active text-white px-4 fs-4"
                    to="/login"
                  >
                    <i className="bi bi-person" />
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white fs-4 fw-semibold"
                    to="/cart"
                    id="cartIcon"
                  >
                    <i className="bi bi-cart2" />
                    <span id="cartLength">{cart.cartItems.length}</span>
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
