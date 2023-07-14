import React, { useEffect } from "react";
import "./CartProductGrid.css";
import CartProduct from "../../components/cartProduct/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  calculateTotalAmount,
  removeAllItems,
} from "../../redux/cartSlice/cartSlice";

export default function CartProductGrid() {
  const cart = useSelector((state) => state.allCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [cart, dispatch]);

  return (
    <>
      <div className="container-fluid py-5" style={{ fontFamily: "ui-serif" }}>
        <div className="container">
          <div className="row text-center border-bottom border-dark heading-table">
            <div className="col-lg-2 col-md-2 col-sm-1">
              <p className="fw-semibold">Image</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2">
              <p className="fw-semibold">Product</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2">
              <p className="fw-semibold">Price</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2">
              <p className="fw-semibold">Quantity</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2">
              <p className="fw-semibold">Total</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2">
              <p className="fw-semibold">Remove</p>
            </div>
          </div>
        </div>

        <div className="container cartProducts d-flex flex-column align-items-center">
          {cart.cartItems.length === 0 ? (
            <>
              <h2 className="fw-semibold mt-5 mb-4">No Items Selected Yet</h2>
              <button
                className="btn btn-dark rounded-pill px-4 py-2"
                onClick={() => navigate("/shop")}
              >
                <i class="bi bi-arrow-left me-2"></i>
                <span>Select Items</span>
              </button>
            </>
          ) : (
            <>
              {cart.cartItems.map((item) => {
                return (
                  <CartProduct
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    quantity={item.cartQuantity}
                  />
                );
              })}
            </>
          )}
        </div>

        {cart.cartItems.length > 0 ? (
          <>
            <div className="container total my-5">
              <div className="heading-table">
                <button
                  className="btn btn-dark py-2 px-4 rounded-pill"
                  onClick={() => dispatch(removeAllItems())}
                >
                  Clear Cart
                </button>
              </div>

              <div className="cartTotal text-center">
                <h3 className="mb-3 text-uppercase">cart totals</h3>
                <div className="d-flex justify-content-between align-items-center border-bottom border-secondary mb-3">
                  <p className="fw-semibold">Subtotal</p>
                  <p className="fw-semibold">${cart.cartTotalAmount}.00</p>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom border-secondary mb-3">
                  <p className="fw-semibold">Delivery charges</p>
                  <p className="fw-semibold">$10.00</p>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom border-secondary mb-3">
                  <p className="fw-semibold">Total</p>
                  <p className="fw-semibold">${cart.cartTotalAmount + 10}.00</p>
                </div>
                <div className="checkout-btn">
                  {cart.cartItems.length > 0 ? (
                    <>
                      <button
                        className="btn btn-dark px-3 py-2 w-100 rounded-pill"
                        onClick={() => navigate("/checkout")}
                      >
                        Proceed To Checkout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-dark px-3 py-2 w-100 rounded-pill"
                        disabled
                      >
                        Proceed To Checkout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
