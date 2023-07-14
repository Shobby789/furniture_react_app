import React from "react";
import ShopHeader from "../../components/shopHeader/ShopHeader";
import Footer from "../../components/footer/Footer";
import ProductGrid from "./ProductGrid";

export default function Shop() {
  return (
    <>
      <ShopHeader
        title={"Shop Page"}
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, soluta? Velit voluptates architecto debitis dolor eos asperiores ad, ipsam dolor"
      />
      <ProductGrid />
      <Footer />
    </>
  );
}
