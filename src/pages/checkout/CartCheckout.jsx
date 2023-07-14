import React from "react";
import "./CheckoutDetails.css";
import { useSelector } from "react-redux";

export default function CartCheckout() {
  const cart = useSelector((state) => state.allCart);

  return (
    <>
      {/* <h4 className="text-center fw-bold">Your Selected Products</h4> */}
      <div
        className="container products-form py-2 rounded bg-white mb-3"
        style={{ minHeight: "70vh" }}
      >
        <h3 className="text-center mb-5 fw-bold">Your Selected Products</h3>
        <div className="row">
          <div className="col-lg-3 col-sm-3 text-center fw-semibold">
            <p>Product</p>
          </div>
          <div className="col-lg-3 col-sm-3 text-center fw-semibold">
            <p>Product Name</p>
          </div>
          <div className="col-lg-3 col-sm-3 text-center fw-semibold">
            <p>Quantity</p>
          </div>
          <div className="col-lg-3 col-sm-3 text-center fw-semibold">
            <p>Amount</p>
          </div>
        </div>
        {cart.cartItems &&
          cart.cartItems.map((item) => {
            return (
              <div
                className="row mb-3 rounded p-2 mx-auto text-center"
                key={item.id}
                id={item.id}
              >
                <div className="col-lg-3 col-md-2">
                  <img src={item.image} alt="" className="img-fluid rounded" />
                </div>
                <div className="col-lg-3 col-md-2 d-flex justify-content-center align-items-center">
                  <h6>{item.name}</h6>
                </div>
                <div className="col-lg-3 col-md-2 d-flex justify-content-center align-items-center">
                  <h6>{item.cartQuantity}</h6>
                </div>
                {/* <div className="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
                  <h6>${item.price}.00</h6>
                </div> */}
                <div className="col-lg-3 col-md-2 d-flex justify-content-center align-items-center">
                  <h6>${item.price * item.cartQuantity}.00</h6>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
