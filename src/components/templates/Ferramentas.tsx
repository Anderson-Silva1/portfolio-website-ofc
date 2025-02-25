"use client";

import { useState } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaHtml5,
  FaCss3,
  FaSass,
  FaNpm,
  FaYarn,
  FaGithub,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiGimp,
  SiInsomnia,
  SiNextdotjs,
  SiPython,
  SiSqlite,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Ferramenta from "../Ferramenta";

const Tecnologias = () => {
  const [tab, setTab] = useState("frontend");

  const tecnologiasFront = [
    {
      id: 1,
      NameTecnologia: "HTML5",
      color: "text-orange-500",
      Icone: FaHtml5,
    },
    {
      id: 2,
      NameTecnologia: "CSS3",
      color: "text-blue-400",
      Icone: FaCss3,
    },
    {
      id: 3,
      NameTecnologia: "Tailwind CSS",
      color: "text-blue-600",
      Icone: RiTailwindCssFill,
    },
    {
      id: 4,
      NameTecnologia: "SCSS",
      color: "text-pink-500",
      Icone: FaSass,
    },
    {
      id: 7,
      NameTecnologia: "Bootstrap",
      color: "text-purple-800",
      Icone: FaBootstrap,
    },
    {
      id: 5,
      NameTecnologia: "React Js",
      color: "text-blue-500",
      Icone: FaReact,
    },
    {
      id: 6,
      NameTecnologia: "Next Js",
      color: "text-black",
      Icone: SiNextdotjs,
    },
  ];

  const tecnologiasBack = [
    {
      id: 1,
      NameTecnologia: "Node.js",
      color: "text-green-500",
      Icone: FaNodeJs,
    },
    {
      id: 2,
      NameTecnologia: "Git",
      color: "text-gray-500",
      Icone: FaGit,
    },
    {
      id: 3,
      NameTecnologia: "TypeScript",
      color: "text-blue-600",
      Icone: SiTypescript,
    },
    {
      id: 4,
      NameTecnologia: "Python",
      color: "text-green-600",
      Icone: SiPython,
    },
  ];

  const tecnologiasBancoDados = [
    {
      id: 1,
      NameTecnologia: "PostgreSQL",
      color: "text-blue-600",
      Icone: BiLogoPostgresql,
    },
    {
      id: 2,
      NameTecnologia: "SQLite",
      color: "text-blue-400",
      Icone: SiSqlite,
    },
  ];

  const tecnologiasFerramentas = [
    {
      id: 1,
      NameTecnologia: "VS Code",
      color: "text-blue-500",
      Icone: VscVscode,
    },
    {
      id: 2,
      NameTecnologia: "Gimp",
      color: "text-black",
      Icone: SiGimp,
    },
    {
      id: 3,
      NameTecnologia: "NPM",
      color: "text-red-500",
      Icone: FaNpm,
    },
    {
      id: 4,
      NameTecnologia: "Vite",
      color: "text-yellow-500",
      Icone: SiVite,
    },
    {
      id: 5,
      NameTecnologia: "YARN",
      color: "text-blue-400",
      Icone: FaYarn,
    },
    {
      id: 6,
      NameTecnologia: "GitHub",
      color: "text-black",
      Icone: FaGithub,
    },
    {
      id: 7,
      NameTecnologia: "Insôminia",
      color: "text-purple-600",
      Icone: SiInsomnia,
    },

    {
      id: 9,
      NameTecnologia: "Figma",
      color: "text-black",
      Icone: FaFigma,
    },
    {
      id: 10,
      NameTecnologia: "Vercel",
      color: "text-black",
      Icone: SiVercel,
    },
  ];

  return (
    <section className="w-full px-[4%] py-24" id="ferramentas">
      <div>
        <h2 className="mb-16 text-center text-4xl font-semibold">
          Tecnologias e Ferramentas
        </h2>

        {/* Abas */}
        <div className="mb-16 grid grid-cols-2 justify-center space-x-6 space-y-4 sm:grid-cols-3 sm:space-x-6 sm:space-y-0 lg:grid-cols-4">
          <button
            className={`text-xl ${tab === "frontend" ? "font-bold text-blue-500" : "text-gray-500"}`}
            onClick={() => setTab("frontend")}
          >
            Frontend
          </button>
          <button
            className={`text-xl ${tab === "backend" ? "font-bold text-green-500" : "text-gray-500"}`}
            onClick={() => setTab("backend")}
          >
            Backend
          </button>
          <button
            className={`text-xl ${tab === "database" ? "font-bold text-orange-500" : "text-gray-500"}`}
            onClick={() => setTab("database")}
          >
            Banco de Dados
          </button>
          <button
            className={`text-xl ${tab === "ferramentas" ? "font-bold text-black" : "text-gray-500"}`}
            onClick={() => setTab("ferramentas")}
          >
            Ferramentas
          </button>
        </div>

        {/* Conteúdo das Abas */}
        {tab === "frontend" && (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {tecnologiasFront.map((tecnologia) => {
              return (
                <Ferramenta
                  key={tecnologia.id}
                  NameTecnologia={tecnologia.NameTecnologia}
                  Icone={tecnologia.Icone}
                  color={tecnologia.color}
                />
              );
            })}
          </div>
        )}
        {tab === "backend" && (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {tecnologiasBack.map((tecnologia) => {
              return (
                <Ferramenta
                  key={tecnologia.id}
                  color={tecnologia.color}
                  NameTecnologia={tecnologia.NameTecnologia}
                  Icone={tecnologia.Icone}
                />
              );
            })}
          </div>
        )}
        {tab === "database" && (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {tecnologiasBancoDados.map((tecnologia) => {
              return (
                <Ferramenta
                  key={tecnologia.id}
                  color={tecnologia.color}
                  NameTecnologia={tecnologia.NameTecnologia}
                  Icone={tecnologia.Icone}
                />
              );
            })}
          </div>
        )}

        {tab === "ferramentas" && (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {tecnologiasFerramentas.map((tecnologia) => {
              return (
                <Ferramenta
                  key={tecnologia.id}
                  color={tecnologia.color}
                  NameTecnologia={tecnologia.NameTecnologia}
                  Icone={tecnologia.Icone}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Tecnologias;
