import React from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import DespreHero from "@/components/despre-noi-page/DespreHero";
import DespreAbout from "@/components/despre-noi-page/DespreAbout";

const index = () => {
  return (
    <div>
      <title>Despre Noi - Cabina foto/video 360</title>
      <Header />
      <DespreHero />
      <DespreAbout />
      <Footer />
    </div>
  );
};

export default index;
