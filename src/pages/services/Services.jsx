import React from "react";
import ShopHeader from "../../components/shopHeader/ShopHeader";
import Footer from "../../components/footer/Footer";
import ServicesGrid from "./ServicesGrid";
import Products from "../../components/products/Products";
import Testimoials from "../../components/testimonials/Testimoials";

export default function Services() {
  return (
    <>
      <ShopHeader
        title="Services"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, soluta? Velit voluptates architecto debitis dolor eos asperiores ad, ipsam dolor"
      />
      <ServicesGrid />
      <ServicesGrid />
      <Products />
      <Testimoials />
      <Footer />
    </>
  );
}
