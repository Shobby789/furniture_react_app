import React from "react";
import ShopHeader from "../../components/shopHeader/ShopHeader";
import Footer from "../../components/footer/Footer";
import ChooseUs from "../../components/chooseus/ChooseUs";
import Team from "./Team";
import Testimoials from "../../components/testimonials/Testimoials";

export default function AboutUs() {
  return (
    <>
      <ShopHeader
        title="About Us"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, soluta? Velit voluptates architecto debitis dolor eos asperiores ad, ipsam dolor"
      />
      <ChooseUs />
      <Team />
      <Testimoials />
      <Footer />
    </>
  );
}
