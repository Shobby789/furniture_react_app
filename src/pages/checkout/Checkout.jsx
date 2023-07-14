import React from "react";
import Footer from "../../components/footer/Footer";
import CheckoutDetails from "./CheckoutDetails";

export default function Checkout() {
  return (
    <>
      <div className="container mx-auto py-5">
        <CheckoutDetails />
      </div>
      <Footer />
    </>
  );
}
