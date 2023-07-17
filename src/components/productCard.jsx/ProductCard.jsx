import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartSlice";

export default function ProductCard({ id, name, price, image }) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="card border-0 mt-5"
        style={{
          width: "20rem",
          background: "#F6F0F0",
          fontFamily: "ui-serif",
        }}
        id={id}
        data-aos="fade-up"
      >
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title fw-semibold">{name}</h5>
          <h6 className="card-title fw-semibold">${price}.00</h6>
          <button
            className="btn btn-dark rounded-circle py-2 px-3"
            onClick={() => dispatch(addToCart({ id, name, image, price }))}
          >
            <i className="bi bi-plus fs-5"></i>
          </button>
        </div>
      </div>
    </>
  );
}
