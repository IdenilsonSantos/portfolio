"use client";
import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  img: string;
  company: string;
  func: string;
  date: string;
  children: ReactNode;
};

const SectionExperience = ({ img, company, func, date, children }: Props) => {
  return (
    <div className="mt-6 mb-6 gap-y-4 gap-x-10 items-center">
      <div className="flex flex-row sm:flex-col sm:gap-2 sm:mb-2 lg:flex-row justify-between">
        <div className="flex items-center gap-2">
          <Image
            className="w-[35px] h-[35px] rounded-full bg-white object-contain"
            src={img}
            alt={company}
            width={50}
            height={50}
          />
          <span className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            {company}
          </span>
        </div>
        <span className="sm:max-w-max text-sm rounded-full bg-teal-600 px-4 flex items-center">
          <span>{date}</span>
        </span>
      </div>
      <span className="text-[#ADB7BE] text-base text-sm">{func}</span>
      <div className="content mt-1">{children}</div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="text-white pt-24" id="experience">
      <div className="lgap-8 items-center py-8 xl:gap-16 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Experiência</h2>

          <SectionExperience
            img="https://res.cloudinary.com/djgvgwuwe/image/upload/v1719521944/portfolio/xlhgzz8sgiudmcezjoce.png"
            company="Manejebem Assessoria Em Agricultura Sustentavel Ltda"
            date="Abril/2022 - Atualmente"
            func="Analista e Desenvolvedor de Software"
          >
            Responsável pelo desenvolvimento do frontend da plataforma interna
            da empresa, utilizando React Js, Sass, HTML e CSS.
            <br />
            Integração entre o Back-End e Front-End para garantir a
            funcionalidade e a experiência do usuário.
            <br />
            Colaboração no desenvolvimento do Backend, incluindo integrações com
            serviços externos e manipulação do banco de dados utilizando NestJs,
            TypeORM e MySQL.
          </SectionExperience>

          <SectionExperience
            img="https://res.cloudinary.com/djgvgwuwe/image/upload/v1719521944/portfolio/qidcwvmjncyl1dbmrkve.png"
            company=" Colégio Dom Bosco Pontara Eireli"
            date="Fevereiro/2022 - Março/2022"
            func="Assistente de Ti Jr"
          >
            Prestação de suporte técnico aos usuários da empresa, com foco na
            configuração e manutenção dos sistemas.
            <br />
            Resolução de chamados internos para identificar e solucionar
            problemas relacionados à infraestrutura tecnológica.
          </SectionExperience>

          <SectionExperience
            img="https://res.cloudinary.com/djgvgwuwe/image/upload/v1719521944/portfolio/ocls4gwnu2io445qukgb.jpg"
            company="Sanches e Vechiatte Ltda"
            date="Maio/2022 - Julho/2017"
            func="Assistente de Ti Jr"
          >
            Suporte técnico presencial e remoto no principal supermercado e suas
            filiais, garantindo a operacionalidade contínua dos equipamentos e
            sistemas.
            <br />
            Manutenção preventiva para assegurar a integridade dos sistemas e
            minimizar impactos nas operações diárias.
          </SectionExperience>

          <SectionExperience
            img="https://res.cloudinary.com/djgvgwuwe/image/upload/v1719521944/portfolio/ngjguqfqvfkorprdwwku.jpg"
            company="Hospital Moura Ltda"
            date="Outubro/2022 - Dezembro/2022"
            func="Estágiario de Ti"
          >
            Suporte técnico abrangente aos usuários e clientes da empresa,
            incluindo configuração e manutenção de sistemas.
            <br />
            Integração entre o Back-End e Front-End para garantir a
            funcionalidade e a experiência do usuário.
            <br />
            Colaboração multifuncional em diversos departamentos para otimizar a
            eficiência organizacional e o suporte operacional.
          </SectionExperience>
        </div>
      </div>
    </section>
  );
};

export default Experience;
