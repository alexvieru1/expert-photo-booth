"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { packages } from "../../../constants/packages";

const Pachete = () => {
  return (
    <div className="flex flex-col items-center mt-10 px-4 lg:px-8 overflow-hidden">
      <div className="w-full lg:w-[80%] flex flex-col items-center">
        <div className="flex flex-col justify-center p-10 text-start">
          <h6 className="text-lg text-[#bb835e] font-amsterdam tracking-wider">
            Pachete
          </h6>
          <h2 className="text-2xl lg:text-3xl mt-4">
            Lista de pachete pe care le putem oferi
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-[80%]">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className={`border rounded-lg shadow-lg p-6 flex flex-col ${
              pkg.special ? "border-[#bb835e]" : "border-gray-200"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold mb-4">{pkg.title}</h3>
              {pkg.special && (
                <span className="bg-[#bb835e] text-white text-sm py-1 px-2 rounded-lg">
                  {pkg.special}
                </span>
              )}
            </div>
            <ul className="mb-6">
              {pkg.features.map((feature, i) => (
                <li key={i} className="text-gray-700 mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="my-8 flex justify-center items-center">
        <Link href="/pachete">
          <Button className="bg-[#bb835e] text-white py-2 px-6 rounded-md hover:bg-[#a6714d] transition duration-300">
            Mai multe detalii
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Pachete;
