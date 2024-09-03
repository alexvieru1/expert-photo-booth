"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator"; // Ensure this path is correct

const Footer = () => {
  return (
    <footer className="bg-[#333] text-white py-8 mt-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start">
          <Image
            src="/images/logo-yellow.png"
            alt="Logo"
            width={150}
            height={150}
          />
          <Separator className="my-4 lg:hidden w-full" />
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex justify-center items-center">
            <Link href="tel:+40732406265" className="mb-2">
              Telefon: +40 732 406 265
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href="https://www.instagram.com/expertphotobooth360/"
              target="_blank"
            >
              <Instagram className="text-2xl text-[#F0EB94] hover:text-white transition duration-300 mr-4" />
            </Link>
          </div>
          <Separator className="my-4 lg:hidden w-full" />
        </div>

        {/* All Rights Reserved */}
        <div className="text-center lg:text-right text-sm">
          <p>&copy; 2024 Expert Photobooth. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
