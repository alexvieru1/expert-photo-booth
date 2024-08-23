"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";

const DespreNoi = () => {
  const [counterInView, setCounterInView] = useState(false);
  const [clientCounterInView, setClientCounterInView] = useState(false);

  return (
    <div
      id="despre-noi"
      className="flex flex-col lg:flex-row justify-around items-center lg:items-stretch mt-10 px-4 lg:px-8 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-around items-center lg:w-[80%]">
        <div className="relative flex justify-end items-center min-h-[70vh] lg:w-[50vw] lg:mr-5">
          <div className="p-5">
            <motion.div
              className="border-[#d3cfc9] border-[20px] lg:mr-6 shadow-lg"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/despre-1.jpeg"
                width={600}
                height={600}
                alt="Despre Noi Image"
              />
            </motion.div>
            <motion.div
              className="p-2 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
              onViewportEnter={() => setCounterInView(true)}
            >
              {counterInView && (
                <AnimatedCounter
                  count={41223}
                  classNameText="text-lg md:text-2xl text-[#bb835e] font-semibold"
                  classNameDiv="flex flex-row justify-end items-end"
                  delayAmount={3}
                  classNameSup="my-auto text-xl text-[#bb835e] font-semibold"
                />
              )}
              <h1 className="text-sm md:text-lg font-semibold text-right mt-2">
                zâmbete surprinse
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="min-h-[70vh] lg:w-[50vw] lg:ml-5 flex flex-col justify-center p-10">
          <h6 className="text-lg text-[#bb835e] font-amsterdam tracking-wider">
            Despre Noi
          </h6>
          <h2 className="text-2xl lg:text-3xl mt-4">Compania Noastră</h2>
          <div className="gap-y-4 text-md text-gray-700 mt-6 leading-relaxed">
            <p>
              ExpertPhotoBooth360 oferă o experiență de neuitat pentru invitații
              tăi, capturând momente speciale din evenimentele tale.
            </p>
            <p>
              Serviciile noastre includ Cabină Foto, Oglinda Magică și 360
              Selfie Video Booth, asigurându-ne că evenimentul tău va fi cu
              adevărat special și memorabil.
            </p>
            <p>
              Conceptul ExpertPhotoBooth 360 a luat naștere din dorința de a
              oferi amintiri durabile de la cele mai importante evenimente din
              viața ta: nunți, botezuri, aniversări, sau orice alt tip de
              eveniment.
            </p>
          </div>
          <div className="flex justify-between items-center mt-10">
            <motion.div
              className="p-2"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true }}
              onViewportEnter={() => setClientCounterInView(true)}
            >
              {clientCounterInView && (
                <AnimatedCounter
                  count={1456}
                  classNameText="text-lg md:text-3xl text-[#bb835e] font-semibold"
                  classNameDiv="flex flex-row justify-end items-end"
                  delayAmount={3}
                  classNameSup="my-auto text-lg text-[#bb835e] font-semibold"
                />
              )}
              <h1 className="text-sm md:text-base text-end font-semibold mt-2">
                clienți satisfăcuți
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 2 },
              }}
              viewport={{ once: true }}
            >
              <Image
                className="border-[#d3cfc9] border-[10px] shadow-lg ml-4 md:ml-0"
                src="/images/despre-2.jpeg"
                width={300}
                height={200}
                alt="Additional Image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DespreNoi;
