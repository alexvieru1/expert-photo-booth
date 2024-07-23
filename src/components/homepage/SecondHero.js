"use client";
import React from "react";
import AnimatedCounter from "../AnimatedCounter";
import { motion } from "framer-motion";

const SecondHero = () => {
  return (
    <div id="counters" className="flex justify-evenly mt-10">
      <motion.div
        className="p-2"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, delay: 1 },
        }}
        viewport={{ once: true }}
      >
        <AnimatedCounter
          count={50}
          classNameText="text-2xl text-[#bb835e] font-semibold"
          classNameDiv="flex flex-row justify-end items-end"
          delayAmount={3}
          classNameSup="my-auto text-lg text-[#bb835e] font-semibold"
        />
        <h1 className="font-semibold"> clienti satisfacuti</h1>
      </motion.div>
      <motion.div
        className="p-2"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, delay: 1 },
        }}
        viewport={{ once: true }}
      >
        <AnimatedCounter
          count={100}
          classNameText="text-2xl text-[#bb835e] font-semibold"
          classNameDiv="flex flex-row justify-end items-end"
          delayAmount={4}
          classNameSup="my-auto text-lg text-[#bb835e] font-semibold"
        />
        <h1 className="font-semibold"> poze efectuate</h1>
      </motion.div>
      <motion.div
        className="p-2"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, delay: 1 },
        }}
        viewport={{ once: true }}
      >
        <AnimatedCounter
          count={80}
          classNameText="text-2xl text-[#bb835e] font-semibold"
          classNameDiv="flex flex-row justify-end items-end"
          delayAmount={5}
          classNameSup="my-auto text-lg text-[#bb835e] font-semibold"
        />
        <h1 className="font-semibold"> evenimente</h1>
      </motion.div>
    </div>
  );
};

export default SecondHero;
