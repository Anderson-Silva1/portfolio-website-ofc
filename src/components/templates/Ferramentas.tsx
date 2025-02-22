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
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Tecnologias = () => {
  const [tab, setTab] = useState("frontend");

  const tecnologias = [
    { nome: "Tailwind CSS", progresso: 95, cor: "bg-blue-600" },
    { nome: "CSS3", progresso: 90, cor: "bg-blue-500" },
    { nome: "React", progresso: 70, cor: "bg-blue-500" },
    { nome: "Next Js", progresso: 85, cor: "bg-black" },
    { nome: "PostgreeSQL", progresso: 65, cor: "bg-blue-600" },
    { nome: "Node.js", progresso: 65, cor: "bg-green-500" },
    { nome: "TypeScript", progresso: 60, cor: "bg-blue-800" },
    { nome: "Git", progresso: 50, cor: "bg-red-600" },
  ];

  return (
    <>
      <section className="w-full py-24" id="ferramentas">
        <div>
          <h2 className="mb-6 text-center text-4xl font-semibold">
            Tecnologias e Ferramentas
          </h2>

          {/* Abas */}
          <div className="mb-6 grid grid-cols-2 justify-center space-x-6 space-y-4 sm:grid-cols-3 sm:space-x-6 sm:space-y-0 lg:grid-cols-4">
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
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <FaHtml5 className="text-4xl text-orange-500" />
                <h3 className="mt-2 text-lg font-semibold">HTML5</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <FaCss3 className="text-4xl text-blue-900" />
                <h3 className="mt-2 text-lg font-semibold">CSS3</h3>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <RiTailwindCssFill className="text-4xl text-blue-600" />
                <h3 className="mt-2 text-lg font-semibold">Tailwind CSS</h3>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <FaSass className="text-4xl text-pink-500" />
                <h3 className="mt-2 text-lg font-semibold">SCSS</h3>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <FaReact className="text-4xl text-blue-500" />
                <h3 className="mt-2 text-lg font-semibold">React JS</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <SiNextdotjs className="text-4xl text-black" />
                <h3 className="mt-2 text-lg font-semibold">Next JS</h3>
              </div>
            </div>
          )}
          {tab === "backend" && (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <FaNodeJs className="text-4xl text-green-500" />
                <h3 className="mt-2 text-lg font-semibold">Node.js</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <FaGit className="text-4xl text-gray-500" />
                <h3 className="mt-2 text-lg font-semibold">Git</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <SiTypescript className="text-4xl text-blue-600" />
                <h3 className="mt-2 text-lg font-semibold">TypeScript</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <SiPython className="text-4xl text-green-600" />
                <h3 className="mt-2 text-lg font-semibold">Python</h3>
              </div>
            </div>
          )}
          {tab === "database" && (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <BiLogoPostgresql className="text-4xl text-blue-600" />
                <h3 className="mt-2 text-lg font-semibold">PostgreSQL</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <SiSqlite className="text-4xl text-blue-400" />
                <h3 className="mt-2 text-lg font-semibold">SQLite</h3>
              </div>
            </div>
          )}

          {tab === "ferramentas" && (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <VscVscode className="text-4xl text-blue-500" />
                <h3 className="mt-2 text-lg font-semibold">VS Code</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <SiGimp className="text-4xl text-black" />
                <h3 className="mt-2 text-lg font-semibold">Gimp</h3>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <SiVite className="text-4xl text-yellow-500" />
                <h3 className="mt-2 text-lg font-semibold">Vite</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <FaNpm className="text-4xl text-red-500" />
                <h3 className="mt-2 text-lg font-semibold">NPM</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <FaYarn className="text-4xl text-blue-400" />
                <h3 className="mt-2 text-lg font-semibold">YARN</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <FaGithub className="text-4xl text-black" />
                <h3 className="mt-2 text-lg font-semibold">GitHub</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <SiInsomnia className="text-4xl text-purple-600" />
                <h3 className="mt-2 text-lg font-semibold">Insôminia</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <FaBootstrap className="text-4xl text-purple-800" />
                <h3 className="mt-2 text-lg font-semibold">Bootstrap</h3>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
                <FaFigma className="text-4xl text-black" />
                <h3 className="mt-2 text-lg font-semibold">Figma</h3>
              </div>
            </div>
          )}
        </div>
      </section>
      {/*  */}
      <section className="p-8">
        <h2 className="mb-6 text-center text-4xl font-semibold">
          Minhas Habilidades
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tecnologias.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md transition hover:scale-105"
            >
              <label className="text-lg font-semibold">{tech.nome}</label>
              <div className="w-full rounded-full bg-gray-200">
                <div
                  className={`h-2 ${tech.cor} rounded-full`}
                  style={{ width: `${tech.progresso}%` }} // Usando o valor do progresso
                ></div>
              </div>
              <span className="text-right text-sm font-medium">
                {tech.progresso}%
              </span>
            </div>
          ))}
        </div>
      </section>
      ;
    </>
  );
};

export default Tecnologias;
