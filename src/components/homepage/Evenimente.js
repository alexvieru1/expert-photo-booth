"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { eventPhotos } from "../../../constants/shortEvents";
import Link from "next/link";
import { Button } from "../ui/button";

const Evenimente = () => {
  return (
    <div
      className="flex flex-col items-center mt-10 px-4 lg:px-8 overflow-hidden"
    >
      <div className="w-full lg:w-[80%] flex flex-col items-center">
        <div className="flex flex-col justify-center p-10 text-center lg:text-left">
          <h3 className="text-lg text-[#bb835e] font-amsterdam tracking-wider">
            Evenimente
          </h3>
          <h2 className="text-2xl lg:text-3xl mt-4">
            Zâmbete surprinse recent
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full lg:w-[80%] justify-items-center">
        {eventPhotos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={photo.src}
              alt={`Poza - ${photo.title}`}
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
              <h3 className="text-lg font-semibold">{photo.title}</h3>
              <Separator className="my-2 w-[80%]" />
              <p className="text-sm">{photo.date}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="my-8 flex justify-center items-center">
        <Link href="/evenimente">
          <Button className="bg-[#bb835e] text-white py-2 px-6 rounded-md hover:bg-[#a6714d] transition duration-300">
            Mai multe
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Evenimente;
