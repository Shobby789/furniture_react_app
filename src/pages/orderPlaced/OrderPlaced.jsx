import React from "react";
import "./OrderPlaced.css";
import { useNavigate } from "react-router-dom";

export default function OrderPlaced() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container py-5 my-5 d-flex align-items-center justify-content-center">
        <div className="msg-section">
          <h4 className="mb-4">Your Order Has Been Placed Successfully</h4>
          <h5>Thank You for Choosing Furni for Your House</h5>
          <button
            className="btn btn-dark rounded-pill fw-semibold px-4 py-2 mt-3"
            onClick={() => navigate("/")}
          >
            Back To Home Page
          </button>
        </div>
      </div>
    </>
  );
}
