"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "Sobre",
    path: "#about",
  },
  {
    title: "Experiência",
    path: "#experience",
  },
  {
    title: "Tecnologias",
    path: "#techs",
  },
  {
    title: "Projetos",
    path: "#projects",
  },
  {
    title: "Contato",
    path: "#contact",
  }
];

type NavLinkProps = {
  href: string;
  title: string;
};

type MenuOverlayProps = {
  links: { title: string; path: string }[];
};

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] rounded md:p-0 hover:text-teal-400">
      {title}
    </Link>
  );
};

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            width={100}
            height={100}
            src="https://res.cloudinary.com/djgvgwuwe/image/upload/v1719170032/portfolio/n8o6ovagd4qpfp4dylfi.svg"
            alt={""}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200"
            >
              <Menu />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200"
            >
              <X />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
