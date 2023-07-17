import React, { useState } from "react";
import "./CheckoutDetails.css";
// import { toast } from "react-toastify";
import CartCheckout from "./CartCheckout";
import PersonalInformation from "./PersonalInformation";
import PaymentInformation from "./PaymentInformation";
import { useNavigate } from "react-router-dom";

export default function CheckoutDetails() {
  const [formDetail, setFormDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cvc: "",
    expiry: "",
  });
  const [count, setCount] = useState(0);
  const handleNext = () => {
    setCount((count) => count + 1);
  };
  const handleBack = () => {
    setCount((count) => count - 1);
  };
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/placeorder");
    localStorage.clear();
    // alert("Order has been placed successfully");
  };

  return (
    <>
      <div>
        {(() => {
          switch (count) {
            case 0:
              return <CartCheckout />;
            case 1:
              return (
                <PersonalInformation
                  formDetail={formDetail}
                  setFormDetail={setFormDetail}
                />
              );
            case 2:
              return (
                <PaymentInformation
                  formDetail={formDetail}
                  setFormDetail={setFormDetail}
                />
              );
            default:
              return null;
          }
        })()}
      </div>
      <div className="pre-next-btns d-flex justify-content-between">
        <div>
          {count > 0 ? (
            <>
              <button
                className="btn btn-dark py-2 px-4 fw-semibold rounded-pill"
                onClick={handleBack}
              >
                Back
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {count === 2 ? (
            <>
              <button
                className="btn btn-dark py-2 px-4 fw-semibold rounded-pill"
                onClick={handleOrder}
              >
                Place Order
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-dark py-2 px-4 fw-semibold rounded-pill"
                onClick={handleNext}
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
