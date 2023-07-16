import React from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import ChooseUs from "../components/chooseus/ChooseUs";
import WeHelpYou from "../components/weHelpYou/WeHelpYou";
import Blogs from "../components/blogs/Blogs";
import Footer from "../components/footer/Footer";
import Testimoials from "../components/testimonials/Testimoials";
import Carousel from "../components/carousel/Carousel";

export default function Home() {
  return (
    <div style={{ background: "#F6F0F0" }}>
      <Hero />
      <Products />
      <ChooseUs />
      <WeHelpYou />
      <Testimoials />
      <Blogs />
      <Footer />
    </div>
  );
}
