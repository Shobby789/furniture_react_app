import React, { useState } from "react";
import "./CheckoutDetails.css";
import { toast } from "react-toastify";
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
    toast.info("Order has been placed successfully");
    localStorage.clear();
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

// function PersonalInformation({ formDetail, setFormDetail }) {
//   const handleOnChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormDetail((values) => ({ ...values, [name]: value }));
//   };
//   return (
//     <>
//       <div className="container fluid pb-2 text-center">
//         {/* <h3 className="text-center">Personal Information</h3> */}
//         <form
//           className="informationForm m-3 py-5 px-3 mx-auto bg-white rounded needs-validation"
//           novalidate
//         >
//           <h3 className="text-center mb-5 fw-semibold" aos="fade-right">
//             Personal Information
//           </h3>
//           <div className="hstack p-2 mb-3 d-flex justify-content-evenly">
//             <div className="w-50 mx-1">
//               <label
//                 htmlFor="exampleInputEmail1"
//                 className="form-label float-start ms-1"
//               >
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="form-control w-100 p-2 border-1 outline-none rounded"
//                 name="firstName"
//                 value={formDetail.firstName}
//                 onChange={handleOnChange}
//                 required
//               />
//             </div>
//             <div className="w-50 mx-1">
//               <label
//                 htmlFor="exampleInputEmail1"
//                 className="form-label float-start ms-1"
//               >
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="form-control w-100 p-2 border-1 outline-none rounded"
//                 name="lastName"
//                 value={formDetail.lastName}
//                 onChange={handleOnChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* Address */}
//           <div className="w-100 mb-3 px-3">
//             <label
//               htmlFor="exampleInputEmail1"
//               className="form-label float-start ms-1"
//             >
//               Address
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Your Complete Address"
//               className="form-control w-100 p-2 border-1 outline-none rounded"
//               name="address"
//               value={formDetail.address}
//               onChange={handleOnChange}
//               required
//             />
//           </div>

//           {/* City & State */}
//           <div className="hstack p-2 mb-3 d-flex justify-content-evenly px-2">
//             <div className="w-50 mx-1">
//               <label
//                 htmlFor="exampleInputEmail1"
//                 className="form-label float-start ms-1"
//               >
//                 City
//               </label>
//               <select
//                 className="form-select w-100 border-1"
//                 aria-label="Default select example"
//                 name="city"
//                 value={formDetail.city}
//                 onChange={handleOnChange}
//                 required
//               >
//                 <option selected>Karachi</option>
//                 <option value="1">Hyderabad</option>
//                 <option value="2">Islamabad</option>
//                 <option value="3">Lahore</option>
//               </select>
//             </div>
//             <div className="w-50 mx-1">
//               <label
//                 htmlFor="exampleInputEmail1"
//                 className="form-label float-start ms-1"
//               >
//                 State
//               </label>
//               <select
//                 className="form-select w-100 border-1"
//                 aria-label="Default select example"
//                 name="state"
//                 value={formDetail.state}
//                 onChange={handleOnChange}
//                 required
//               >
//                 <option selected value={"1"}>
//                   Sindh
//                 </option>
//                 <option value="2">Punjab</option>
//                 <option value="3">Balochistan</option>
//                 <option value="4">KPK</option>
//               </select>
//             </div>
//           </div>

//           {/* Email & Phone */}
//           <div className="hstack p-2 mb-3">
//             <div className="w-50 mx-1">
//               <label
//                 htmlFor="exampleInputEmail1"
//                 className="form-label float-start"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Email address"
//                 className="form-control border-1 rounded p-2 w-100"
//                 value={formDetail.email}
//                 onChange={handleOnChange}
//                 required
//               />
//             </div>
//             <div className="w-50 mx-1">
//               <label
//                 htmlFor="exampleInputEmail1"
//                 className="form-label float-start"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 placeholder="Phone no."
//                 className="form-control border-1 rounded p-2 w-100"
//                 name="phoneNumber"
//                 value={formDetail.phoneNumber}
//                 onChange={handleOnChange}
//                 required
//               />
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// function PaymentInformation({ formDetail, setFormDetail }) {
//   const cart = useSelector((state) => state.allCart);
//   const handleOnChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormDetail((values) => ({ ...values, [name]: value }));
//   };

//   return (
//     <div>
//       <div className="container-fluid pb-3 text-center">
//         <form className="paymentForm border-1 bg-white rounded py-5 px-5 mx-auto">
//           <h3 className="mx-auto">Final step, make the payment</h3>
//           <p className="text-center mb-5">
//             To place your order, kindly complete your payment using a valid
//             credit card.
//           </p>
//           <div className="input-grp w-100 mb-4">
//             <label
//               htmlFor="exampleInputEmail1"
//               className="form-label float-start ms-1"
//             >
//               Card Number
//             </label>
//             <input
//               type="text"
//               placeholder="xxxx xxxx xxxx xxxx"
//               className="form-control w-100 p-2 border-1 outline-none rounded"
//               value={formDetail.carNumber}
//               name="cardNumber"
//               onChange={handleOnChange}
//             />
//           </div>
//           <div className="input-grp w-100 d-flex justify-content-between flex-wrap mb-4">
//             <div className="w-50">
//               <label
//                 htmlFor="exampleInputEmail1"
//                 className="form-label float-start ms-1"
//               >
//                 Expiry
//               </label>
//               <input
//                 type="text"
//                 placeholder="19/25"
//                 className="form-control w-100 me-1 p-2 border-1 outline-none rounded"
//                 value={formDetail.expiry}
//                 name="expiry"
//                 onChange={handleOnChange}
//               />
//             </div>
//             <div className="w-50">
//               <label
//                 htmlFor="exampleInputEmail1"
//                 className="form-label float-start ms-1"
//               >
//                 CVC
//               </label>
//               <input
//                 type="text"
//                 placeholder="x x x"
//                 className="form-control w-100 ms-1 p-2 border-1 outline-none rounded"
//                 value={formDetail.cvc}
//                 name="cvc"
//                 onChange={handleOnChange}
//               />
//             </div>
//           </div>
//           <div className="input-grp w-100">
//             <label
//               htmlFor="exampleInputEmail1"
//               className="form-label float-start ms-1"
//             >
//               Amount Payable
//             </label>
//             <input
//               type="text"
//               placeholder={`${"$" + (cart.cartTotalAmount + 10)}`}
//               disabled
//               className="form-control w-100 ms-1 p-2 border-1 rounded bg-white"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
