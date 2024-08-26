import React from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import PacheteHero from "@/components/pachete-page/PacheteHero";
import PacheteAbout from "@/components/pachete-page/PacheteAbout";

const index = () => {
  return (
    <div>
      <Header />
      <PacheteHero/>
      <PacheteAbout/>
      <Footer/>
    </div>
  );
};

export default index;
