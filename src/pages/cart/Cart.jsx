import React from "react";
import ShopHeader from "../../components/shopHeader/ShopHeader";
import Footer from "../../components/footer/Footer";
import CartProductGrid from "./CartProductGrid";

export default function Cart() {
  return (
    <>
      <ShopHeader
        title="Your Products"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, soluta? Velit voluptates architecto debitis dolor eos asperiores ad, ipsam dolor"
      />
      <CartProductGrid />
      <Footer />
    </>
  );
}
