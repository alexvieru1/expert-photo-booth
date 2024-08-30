import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const DespreAbout = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center w-[90%] lg:w-[80%] mx-auto mt-10">
      {/* Text Section */}
      <motion.div
        className="flex flex-col justify-start w-full lg:w-2/3 p-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-left text-2xl font-semibold lg:text-3xl text-[#333]">
          Povestea noastră
        </h2>
        <p className="mt-4 text-gray-700 lg:text-md">
          La Expert Photobooth, suntem dedicați să transformăm fiecare eveniment
          într-o experiență memorabilă. Cu o pasiune pentru detalii și un
          angajament față de excelență, ne-am propus să oferim servicii de
          fotografie de înaltă calitate, adaptate nevoilor fiecărui client.
        </p>
        <p className="mt-4 text-gray-700 lg:text-md">
          Activitatea noastră a început din dorința de a crea momente de neuitat
          și de a aduce bucurie în viețile oamenilor prin intermediul
          fotografiei. De la evenimente private, cum ar fi nunți și botezuri,
          până la petreceri corporate și aniversări, suntem alături de tine
          pentru a surprinde fiecare zâmbet și fiecare emoție.
        </p>
        <p className="mt-4 text-gray-700 lg:text-md">
          Cu un echipament modern și o echipă dedicată, am reușit să ne facem un
          nume în industrie, devenind un partener de încredere pentru
          organizarea oricărui tip de eveniment. Ne mândrim cu faptul că fiecare
          eveniment la care participăm este o nouă oportunitate de a aduce ceva
          unic și personalizat, reflectând perfect dorințele și așteptările
          clienților noștri.
        </p>
        <p className="mt-4 text-gray-700 lg:text-md">
          În doar câțiva ani, am crescut constant, câștigând încrederea
          clienților prin profesionalismul și creativitatea pe care le aducem în
          fiecare proiect. La Expert Photobooth, nu oferim doar servicii de
          fotografie, ci creăm amintiri care durează o viață întreagă.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="hidden lg:block w-full lg:w-1/3"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/despre-about.webp"
          layout="responsive"
          width={400}
          height={600}
          alt="photo"
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default DespreAbout;
