"use client";

import { v4 as uuidv4 } from "uuid";
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
  SiStyledcomponents,
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
      id: uuidv4(),
      NameTecnologia: "HTML5",
      color: "text-orange-500",
      Icone: FaHtml5,
    },
    {
      id: uuidv4(),
      NameTecnologia: "CSS3",
      color: "text-blue-400",
      Icone: FaCss3,
    },
    {
      id: uuidv4(),
      NameTecnologia: "Tailwind CSS",
      color: "text-blue-600",
      Icone: RiTailwindCssFill,
    },
    {
      id: uuidv4(),
      NameTecnologia: "SCSS",
      color: "text-pink-500",
      Icone: FaSass,
    },
    {
      id: uuidv4(),
      NameTecnologia: "Bootstrap",
      color: "text-purple-800",
      Icone: FaBootstrap,
    },
    {
      id: uuidv4(),
      NameTecnologia: "Style Components",
      // color: "text-purple-[#F0B5F0]",
      color: "text-pink-600",
      Icone: SiStyledcomponents,
    },
    {
      id: uuidv4(),
      NameTecnologia: "React Js",
      color: "text-blue-500",
      Icone: FaReact,
    },
    {
      id: uuidv4(),
      NameTecnologia: "Vite",
      color: "text-yellow-500",
      Icone: SiVite,
    },
    {
      id: uuidv4(),
      NameTecnologia: "Next Js",
      color: "text-black",
      Icone: SiNextdotjs,
    },
  ];

  const tecnologiasBack = [
    {
      id: uuidv4(),
      NameTecnologia: "Node.js",
      color: "text-green-500",
      Icone: FaNodeJs,
    },
    {
      id: uuidv4(),
      NameTecnologia: "Git",
      color: "text-gray-500",
      Icone: FaGit,
    },
    {
      id: uuidv4(),
      NameTecnologia: "TypeScript",
      color: "text-blue-600",
      Icone: SiTypescript,
    },
    {
      id: uuidv4(),
      NameTecnologia: "Python",
      color: "text-green-600",
      Icone: SiPython,
    },
  ];

  const tecnologiasBancoDados = [
    {
      id: uuidv4(),
      NameTecnologia: "PostgreSQL",
      color: "text-blue-600",
      Icone: BiLogoPostgresql,
    },
    {
      id: uuidv4(),
      NameTecnologia: "SQLite",
      color: "text-blue-400",
      Icone: SiSqlite,
    },
  ];

  const tecnologiasFerramentas = [
    {
      id: uuidv4(),
      NameTecnologia: "VS Code",
      color: "text-blue-500",
      Icone: VscVscode,
    },
    {
      id: uuidv4(),
      NameTecnologia: "Gimp",
      color: "text-black",
      Icone: SiGimp,
    },
    {
      id: uuidv4(),
      NameTecnologia: "NPM",
      color: "text-red-500",
      Icone: FaNpm,
    },

    {
      id: uuidv4(),
      NameTecnologia: "YARN",
      color: "text-blue-400",
      Icone: FaYarn,
    },
    {
      id: uuidv4(),
      NameTecnologia: "GitHub",
      color: "text-black",
      Icone: FaGithub,
    },
    {
      id: uuidv4(),
      NameTecnologia: "Insôminia",
      color: "text-purple-600",
      Icone: SiInsomnia,
    },

    {
      id: uuidv4(),
      NameTecnologia: "Figma",
      color: "text-black",
      Icone: FaFigma,
    },
    {
      id: uuidv4(),
      NameTecnologia: "Vercel",
      color: "text-black",
      Icone: SiVercel,
    },
  ];

  return (
    <section className="w-full px-[4%] py-24" id="ferramentas">
      <div>
        <h2 className="title">Tecnologias e Ferramentas</h2>

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
