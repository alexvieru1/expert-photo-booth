import React from "react";
import { motion } from "framer-motion";

const EventsHero = () => {
  return (
    <div className="mt-32 flex flex-col justify-center items-center">
    <motion.div
      className="my-10 min-h-52 lg:min-h-96 w-[80%] border-[#F0EB94] border-[10px] text-center font-amsterdam p-8 bg-[#333] bg-opacity-80 relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background Overlay Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#F0EB94] via-[#333] to-[#F0EB94] opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.h1
        className="relative text-3xl mt-3 lg:text-6xl lg:mt-4 text-[#F0EB94] z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Evenimente
      </motion.h1>
    </motion.div>
  </div>
  )
}

export default EventsHero