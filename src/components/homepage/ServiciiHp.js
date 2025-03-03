"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { services } from "../../../constants/services";
import Link from "next/link";
import { Button } from "../ui/button";

const ServicesHp = () => {
  const [openService, setOpenService] = useState(null);
  const serviceRefs = useRef([]);

  const toggleService = (index) => {
    const isSameService = openService === index;
    setOpenService(isSameService ? null : index);
  
    // Ensure scroll only happens when opening a new section
    if (!isSameService) {
      setTimeout(() => {
        if (serviceRefs.current[index]) {
          serviceRefs.current[index].scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 300);
    }
  };
  

  return (
    <div className="flex flex-col items-center mt-10 px-4 lg:px-8 overflow-hidden">
      <div className="w-full lg:w-[80%] flex flex-col items-center">
        <div className="flex flex-col justify-center p-10 text-center lg:text-left">
          <h3 className="text-lg text-[#bb835e] font-amsterdam tracking-wider">
            Servicii
          </h3>
          <h2 className="text-2xl lg:text-3xl mt-4">Alege experiența potrivită</h2>
        </div>
      </div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full lg:w-[80%] justify-items-center">
        {services.map((pkg, index) => (
          <div key={index} className="w-full">
            <motion.div
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={pkg.image}
                alt={`Poza - ${pkg.title}`}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold">{pkg.title}</h3>
                <Separator className="my-2 w-[80%]" />
                <Button
                    variant='outline'
                  className="bg-black bg-opacity-35 text-white py-2 px-6 rounded-md hover:bg-opacity-70 transition duration-300"
                  onClick={() => toggleService(index)}
                >
                  Alege {pkg.title}
                </Button>
              </motion.div>
            </motion.div>

            {/* Show details **below** the service on mobile */}
            {openService === index && (
              <motion.div
                ref={(el) => (serviceRefs.current[index] = el)}
                className="mt-4 w-full p-6 bg-gray-100 rounded-lg shadow-md lg:hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-[#bb835e]">{pkg.title}</h3>
                <Separator className="my-3" />
                <p className="text-gray-700">{pkg.description}</p>
                <p className="mt-2 text-gray-700">{pkg.description2}</p>

                {/* Packages List */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Pachete disponibile:</h4>
                  <ul className="mt-2 space-y-1">
                    {pkg.packages.map((pack, i) => (
                      <li key={i} className="flex justify-between border-b py-2 text-gray-800">
                        <span>{pack.time}</span>
                        <span className="font-semibold text-[#bb835e]">{pack.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Show details **at the bottom** on larger screens */}
      {openService !== null && (
        <motion.div
          ref={(el) => (serviceRefs.current[openService] = el)}
          className="hidden lg:block mt-8 w-full lg:w-[80%] p-6 bg-gray-100 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-[#bb835e]">
            {services[openService].title}
          </h3>
          <Separator className="my-3" />
          <p className="text-gray-700">{services[openService].description}</p>
          <p className="mt-2 text-gray-700">{services[openService].description2}</p>

          {/* Packages List */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Pachete disponibile:</h4>
            <ul className="mt-2 space-y-1">
              {services[openService].packages.map((pkg, i) => (
                <li key={i} className="flex justify-between border-b py-2 text-gray-800">
                  <span>{pkg.time}</span>
                  <span className="font-semibold text-[#bb835e]">{pkg.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      <div className="my-8 flex justify-center items-center">
        <Link href="/pachete">
          <Button className="bg-[#bb835e] text-white py-2 px-6 rounded-md hover:bg-[#a6714d] transition duration-300">
            Vezi toate pachetele
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesHp;
