import React from "react";
import ShopHeader from "../../components/shopHeader/ShopHeader";
import Footer from "../../components/footer/Footer";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <ShopHeader
        title="Contact Us"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, soluta? Velit voluptates architecto debitis dolor eos asperiores ad, ipsam dolor"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
