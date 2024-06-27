"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section className="text-white pt-24" id="about">
      <div className="gap-8 items-center py-8 xl:gap-16 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            Desenvolvedor Fullstack com experiência em React.js, Next.js, Redux,
            JavaScript, TypeScript, Styled Components, Sass, Material UI,
            Tailwind, MySQL e consumo de APIs. Apaixonado pela area de desenvolvimento.
            Formado em Análise e Desenvolvimento de Sistemas pelo IFPR .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
