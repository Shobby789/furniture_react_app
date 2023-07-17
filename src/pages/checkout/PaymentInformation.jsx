import React, { useEffect } from "react";
import "./CheckoutDetails.css";
import { calculateTotalAmount } from "../../redux/cartSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PaymentInformation({ formDetail, setFormDetail }) {
  const cart = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormDetail((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [cart, dispatch]);
  return (
    <div className="pt-5">
      <div className="container-fluid pt-5 pb-3 text-center">
        {/* <h3 className="text-center">Payment Information</h3> */}
        <form className="paymentForm border-1 bg-white rounded py-5 px-5 mx-auto">
          <h3 className="mx-auto">Final step, make the payment</h3>
          <p className="text-center mb-5">
            To place your order, kindly complete your payment using a valid
            credit card.
          </p>
          <div className="input-grp w-100 mb-3">
            <label
              for="exampleInputEmail1"
              className="form-label float-start ms-1"
            >
              Card Number
            </label>
            <input
              type="text"
              placeholder="xxxx xxxx xxxx xxxx"
              className="form-control w-100 p-2 border-1 outline-none rounded"
              value={formDetail.cardNumber}
              name="cardNumber"
              onChange={handleOnChange}
            />
          </div>
          <div className="input-grp w-100 d-flex justify-content-between flex-wrap mb-3">
            <div className="w-50">
              <label
                for="exampleInputEmail1"
                className="form-label float-start ms-1"
              >
                Expiry
              </label>
              <input
                type="text"
                placeholder="19/25"
                className="form-control w-100 me-1 p-2 border-1 outline-none rounded"
                value={formDetail.expiry}
                name="expiry"
                onChange={handleOnChange}
              />
            </div>
            <div className="w-50">
              <label
                for="exampleInputEmail1"
                className="form-label float-start ms-1"
              >
                CVC
              </label>
              <input
                type="text"
                placeholder="x x x"
                className="form-control w-100 ms-1 p-2 border-1 outline-none rounded"
                value={formDetail.cvc}
                name="cvc"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="input-grp w-100">
            <label
              for="exampleInputEmail1"
              className="form-label float-start ms-1"
            >
              Total Amount Payable
            </label>
            <input
              type="text"
              placeholder={`$ ${cart.cartTotalAmount + 10}.00`}
              disabled
              className="form-control w-100 ms-1 p-2 border-1 rounded bg-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
