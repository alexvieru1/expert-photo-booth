import React from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact-page/ContactHero";
import ContactAbout from "@/components/contact-page/ContactAbout";

const index = () => {
  return (
    <div>
      <title>Contact - Cabina foto/video 360</title>
      <Header />
      <ContactHero />
      <ContactAbout />
      <Footer />
    </div>
  );
};

export default index;
