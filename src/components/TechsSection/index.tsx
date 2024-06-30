"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";
import { techIcons } from "@/utils/techIcons";

const TechsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="text-white pt-24" id="techs">
      <div ref={ref} className="">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3 }}
          className="items-center py-8 xl:gap-16 sm:py-16"
        >
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">Tecnologias</h2>
            <div className="mt-6 mb-6 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 gap-y-4 gap-x-10 items-center">
              {techIcons.map(({ icon, alt, label }) => (
                <div key={label} className="flex flex-col gap-1 items-center">
                  <Image src={icon} alt={alt} width={40} height={40} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechsSection;
