import React from "react";
import "./Products.css";
import product1 from "../../images/product-1.png";
import product2 from "../../images/product-2.png";
import product3 from "../../images/product3.png";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { useDispatch } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container-fluid products pb-5">
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5 ps-4 text-content">
            <h1 className="text-dark mt-5 mb-4 heading-1">
              Crafted with excellent material.
            </h1>
            <p className="text-secondary mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              fugit cum porro dolor vitae consectetur facilis deserunt sit
              laudantium doloribus!
            </p>
            <button className="btn btn-dark rounded-pill px-4 py-2">
              Explore
            </button>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5 ">
            {/* Card1 */}
            <div
              className="card mt-5 mx-auto border-0"
              style={{ width: "17rem", background: "#F6F0F0" }}
            >
              <img src={product1} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Nordic Chair</h5>
                <h6 className="card-title">$50.00</h6>
                <button
                  className="btn btn-dark rounded-circle pb-2 px-3"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: 1,
                        name: "Nordic Chair",
                        image: product1,
                        price: 50,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5">
            {/* Card 2 */}
            <div
              className="card border-0 mt-5 mx-auto"
              style={{ width: "17rem", background: "#F6F0F0" }}
            >
              <img src={product2} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Kruzo Aero Chair</h5>
                <h6 className="card-title">$50.00</h6>
                <button
                  className="btn btn-dark rounded-circle pb-2 px-3"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: 2,
                        name: "Kruzo Aero Chair",
                        image: product2,
                        price: 50,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5">
            {/* Card 3 */}
            <div
              className="card border-0 mt-5 mx-auto"
              style={{ width: "17rem", background: "#F6F0F0" }}
            >
              <img src={product3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Ergonomic Chair</h5>
                <h6 className="card-title">$50.00</h6>
                <button
                  className="btn btn-dark rounded-circle pb-2 px-3"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: 3,
                        name: "Ergonomic Chair",
                        image: product3,
                        price: 50,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
