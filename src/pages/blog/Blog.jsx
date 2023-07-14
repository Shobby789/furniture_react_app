import React from "react";
import ShopHeader from "../../components/shopHeader/ShopHeader";
import Footer from "../../components/footer/Footer";
import BlogGrid from "./BlogGrid";
import Testimoials from "../../components/testimonials/Testimoials";

export default function Blog() {
  return (
    <>
      <ShopHeader
        title="Blogs"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, soluta? Velit voluptates architecto debitis dolor eos asperiores ad, ipsam dolor"
      />
      <div className="container mt-5 pt-5">
        <BlogGrid />
      </div>
      <BlogGrid />
      <BlogGrid />
      <Testimoials />
      <Footer />
    </>
  );
}
