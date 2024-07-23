"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";


const AnimatedCounter = ({
  count,
  classNameText,
  classNameDiv,
  classNameSup,
  delayAmount,
}) => {
  const countValue = useMotionValue(0);
  const rounded = useTransform(countValue, Math.round);

  useEffect(() => {
    const animation = animate(countValue, count, {
      duration: 2, delay:delayAmount
    });

    return () => {
      animation.stop();
    };
  }, [count, countValue, delayAmount]);

  return (
    <div className={classNameDiv}>
        <motion.h1 className={classNameText}>
          {rounded} 
        </motion.h1>
        <sup className={classNameSup}>+</sup>
    </div>
  );
};

export default AnimatedCounter;
