"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const images = [
  "/images/test-1.jpg",
  "/images/test-2.jpg",
  "/images/test-3.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToCounters = () => {
    document.getElementById("counters").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-24 flex justify-center items-center w-full">
      <div className="w-full h-[80vh] flex items-center justify-center relative">
        <AnimatePresence>
          {images.map(
            (image, index) =>
              index === currentImage && (
                <motion.div
                  key={image}
                  className="absolute w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )
          )}
        </AnimatePresence>
        <motion.div
          className="4xs:w-[90vw] md:w-[70vw] h-auto p-5 relative flex-col place-self-center justify-center items-center bg-white bg-opacity-75 z-10"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.3, delay: 0 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="flex justify-center items-center 4xs:text-lg md:text-2xl font-semibold">
            eXpert Photobooth
          </h1>
          <p className="flex justify-center items-center place-self-center 4xs:text-xs md:text-md text-center md:mt-4">
            Suntem partenerul tău de încredere în salvarea momentelor de pret din viata ta.
          </p>
          <div className="flex justify-center items-center 4xs:mt-4 md:mt-16">
            <Button className="mr-10" onClick={scrollToCounters}>
              Descopera mai mult
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
