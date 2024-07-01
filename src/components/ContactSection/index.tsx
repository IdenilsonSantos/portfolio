"use client";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import fetchData from "@/utils/fetchData";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  async function sendEmail(data: FormData) {
    const apiEndpoint = "/api/email";

    try {
      setLoading(true);
      await fetchData.post(apiEndpoint, data);
      toast("Mensagem enviada com sucesso, será um prazer falar contigo :)");
      setLoading(false);
      reset();
    } catch (error) {
      console.log("error");
    }
  }

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white">Deixe uma mensagem</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Vamos conversar um pouco ?
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/IdenilsonSantos">
            <GithubIcon className="text-teal-600 hover:text-teal-400" />
          </Link>
          <Link href="https://www.linkedin.com/in/idenilsonsantosoliveira/">
            <LinkedinIcon className="text-teal-600 hover:text-teal-400" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-neutral-900 border border-neutral-800 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="seumelhoremail@mail.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-neutral-900 border border-neutral-800 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Olá, como vai ?"
              {...register("subject", { required: true })}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              className="bg-neutral-900 border border-neutral-800 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Podemos conversar um pouco ?"
              {...register("message", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-400 transition ease-in-out text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {loading ? "Enviando mensagem..." : "Enviar mensagem"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactSection;
