"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-56" id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
          <span className="text-teal-400">Olá, eu sou</span>
          <br></br>
          <TypeAnimation
            sequence={[
              "Idenilson",
              1000,
              "Desenvolvedor Frontend",
              1000,
              "Desenvolvedor Backend",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div>
          <Link
            href="/#contact"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-lg mr-4 bg-teal-600 hover:bg-teal-400 transition ease-in-out text-white"
          >
            Me contrate
          </Link>
          <Link
            href="https://drive.google.com/uc?export=download&id=1U9mCXilh53G5IFawtKVlyrpEGY0Ch2KC"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-lg hover:text-teal-800 transition ease-in-out text-white mt-3"
          >
            <span className="block rounded px-5 py-2">Download CV</span>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
      ></motion.div>
    </section>
  );
};

export default HeroSection;
