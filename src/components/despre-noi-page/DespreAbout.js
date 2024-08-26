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
          Acum doi ani, doi prieteni cu o pasiune comună pentru capturarea
          momentelor speciale au decis să-și transforme visul în realitate.
          Sergiu și Nicolae, fiecare cu experiența sa în fotografie și
          tehnologie, au pus bazele Expert Photobooth.{" "}
        </p>
        <p className="mt-4 text-gray-700 lg:text-md">
          Ce a început ca o idee simplă de a aduce bucurie și amintiri de
          neuitat în viața oamenilor s-a transformat rapid într-o afacere de
          succes. Cu determinare și o atenție deosebită pentru detalii, Sergiu
          și Nicolae au creat un serviciu care nu doar că surprinde momente, dar
          le și transformă în experiențe de neuitat.
        </p>
        <p className="mt-4 text-gray-700 lg:text-md">
          În doar doi ani, Expert Photobooth a devenit sinonim cu
          profesionalismul și creativitatea, oferind servicii de top la
          evenimente de toate tipurile, de la nunți și botezuri la petreceri
          corporate și aniversări. Fiecare eveniment este o nouă oportunitate
          pentru echipa noastră de a aduce zâmbete pe fețele oamenilor și de a
          crea amintiri care vor dura o viață întreagă.
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
          src="/images/despre-about.jpeg"
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
