import React from "react";
import "./CartProduct.css";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  removeItem,
} from "../../redux/cartSlice/cartSlice";

// border-bottom border-secondary
export default function CartProduct({ id, name, price, image, quantity }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container py-3">
        <div className="row text-center" key={id} id={id}>
          <div className="col-lg-2 col-md-2">
            <img src={image} alt="" className="img-fluid rounded" />
          </div>
          <div className="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
            <h6>{name}</h6>
          </div>
          <div className="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
            <h6>${price}.00</h6>
          </div>
          <div className="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
            <button
              className="btn"
              onClick={() =>
                dispatch(
                  decrementQuantity({ id, name, price, image, quantity })
                )
              }
            >
              <i className="bi bi-dash fs-4"></i>
            </button>
            <p className="mx-1 bg-white px-4 py-2 mt-3">{quantity}</p>
            <button
              className="btn"
              onClick={() =>
                dispatch(addToCart({ id, name, price, image, quantity }))
              }
            >
              <i className="bi bi-plus fs-4"></i>
            </button>
          </div>
          <div className="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
            <h6>${price * quantity}.00</h6>
          </div>
          <div className="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
            <button
              className="btn"
              onClick={() => dispatch(removeItem({ id, name, price, image }))}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
