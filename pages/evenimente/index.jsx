import React from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import EventsHero from "@/components/evenimente-page/EventsHero";
import EventsAbout from "@/components/evenimente-page/EventsAbout";

const index = () => {
  return (
    <div>
      <Header />
      <EventsHero/>
      <EventsAbout/>
      <Footer/>
    </div>
  );
};

export default index;
