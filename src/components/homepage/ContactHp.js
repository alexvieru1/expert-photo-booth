"use client";

import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const ContactHp = () => {
  return (
    <motion.div
      className="flex flex-col items-center mt-16 px-6 lg:px-8 py-12 bg-gray-100 shadow-lg rounded-lg w-full lg:w-[80%] mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h3 className="text-lg text-[#bb835e] font-amsterdam tracking-wider">
        Contacteaza-ne
      </h3>
      <h2 className="text-2xl lg:text-3xl mt-4 text-center">
        Suntem aici pentru tine!
      </h2>

      <Separator className="my-6 w-[60%]" />

      {/* Contact Info */}
      <div className="flex flex-col gap-6 text-center">
        <div>
          <p className="text-gray-700 text-lg">
            Dacă ai întrebări, dorești o ofertă personalizată sau vrei să
            colaborezi cu noi, nu ezita să ne contactezi!
          </p>
        </div>

        {/* Phone Numbers */}
        <div className="flex flex-col gap-2">
          <a
            href="tel:+40732406265"
            className="flex items-center justify-center gap-2 text-lg font-semibold text-[#bb835e] hover:text-[#a6714d] transition duration-300"
          >
            <Phone className="w-5 h-5" />
            0732 406 265
          </a>
          <a
            href="tel:+40745310150"
            className="flex items-center justify-center gap-2 text-lg font-semibold text-[#bb835e] hover:text-[#a6714d] transition duration-300"
          >
            <Phone className="w-5 h-5" />
            0745 310 150
          </a>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <Link href="/contact">
          <Button className="bg-[#bb835e] text-white py-3 px-8 rounded-md hover:bg-[#a6714d] transition duration-300">
            Mergi la pagina de contact
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactHp;
