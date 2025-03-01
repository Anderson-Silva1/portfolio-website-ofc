"use client";
import { v4 as uuidv4 } from "uuid";
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import Projeto from "../Projeto";
import { SiStyledcomponents, SiVite } from "react-icons/si";
import { useState } from "react";
import { DiJavascript1 } from "react-icons/di";

const Projetos = () => {
  const [isVerMaisProjetos, setIsVerMaisProjetos] = useState(false);
  const [botaoTextoProjetos, setBotaoTextoProjetos] = useState("Ver Mais");

  const verMaisProjetos = () => {
    setIsVerMaisProjetos(!isVerMaisProjetos);

    if (isVerMaisProjetos) {
      setBotaoTextoProjetos("Ver Mais");
    } else {
      setBotaoTextoProjetos("Ver Menos");
    }

    console.log(isVerMaisProjetos);
    console.log(botaoTextoProjetos);
  };

  const projetos = [
    {
      id: uuidv4(),
      titulo: "Gestão financeira",
      tecnologias: [
        { icon: FaReact, id: 1, color: "text-blue-600" },
        { icon: SiVite, id: 2, color: "text-yellow-500" },
        { icon: SiStyledcomponents, id: 3, color: "text-pink-600" },
      ],
      linkRepo: "https://github.com/Anderson-Silva1/gest-o-financeira-1.0",
      linkDeploy: "https://gestao-financeira-1-0.vercel.app/",
      imagem: "/projeto-gestao-financeira.png",
      descricao:
        "Uma aplicação web para organização financeira, desenvolvida com React.js e Vite. Os dados são armazenados no LocalStorage, garantindo persistência mesmo após o fechamento do navegador.",
    },
    {
      id: uuidv4(),
      titulo: "Lista de Taferas",
      tecnologias: [
        { icon: FaHtml5, id: 1, color: "text-orange-600" },
        { icon: FaCss3, id: 2, color: "text-blue-400" },
        { icon: DiJavascript1, id: 3, color: "text-yellow-400" },
      ],
      linkRepo: "https://github.com/Anderson-Silva1/listaTarefas",
      linkDeploy: "https://lista-tarefas-jet.vercel.app/",
      imagem: "/projero-lista-de-tarefas.png",
      descricao:
        "Uma aplicação web para gerenciamento de tarefas, desenvolvida com React.js e Vite. As tarefas são armazenadas no LocalStorage, permitindo que os dados permaneçam salvos mesmo após o fechamento do navegador.",
    },
    {
      id: uuidv4(),
      titulo: "Conversor",
      tecnologias: [
        { icon: FaHtml5, id: 1, color: "text-orange-600" },
        { icon: FaCss3, id: 2, color: "text-blue-400" },
        { icon: DiJavascript1, id: 3, color: "text-yellow-400" },
      ],
      linkRepo: "https://github.com/Anderson-Silva1/ConverterMoedas",
      linkDeploy: "https://converter-moedas-beta.vercel.app/",
      imagem: "/projeto-conversor-moeda.png",
      descricao:
        "Projeto desenvolvido junto a equipe Dev Club onde pegamos informações de uma API para saber o real valor das moedas mais valiosas do mercado e faz a conversão para a nossa moeda e para outras moedas",
    },
    {
      id: uuidv4(),
      titulo: "IMC BootsTrap",
      tecnologias: [
        { icon: FaHtml5, id: 1, color: "text-orange-600" },
        { icon: FaCss3, id: 2, color: "text-blue-400" },
        { icon: DiJavascript1, id: 3, color: "text-yellow-400" },

        { icon: FaBootstrap, id: 4, color: "text-purple-800" },
      ],
      linkRepo: "https://github.com/Anderson-Silva1/CalculadoraImcBootsTrap",
      linkDeploy: "https://calculadora-imc-boots-trap.vercel.app/",
      imagem: "/projeto-imc-bootstrap.png",
      descricao:
        "Calculadora IMC onde nos mostra se estamos com o peso ideal ou não. Fiz ela usando o BootsTrap, que é uma ferramenta CSS que disponibiliza elementos HTML já prontos.",
    },

    {
      id: uuidv4(),
      titulo: "Animes",
      tecnologias: [
        { icon: FaHtml5, id: 1, color: "text-orange-600" },
        { icon: FaCss3, id: 2, color: "text-blue-400" },
        { icon: DiJavascript1, id: 3, color: "text-yellow-400" },
      ],
      linkRepo: "https://github.com/Anderson-Silva1/OnePeace-Personagens-2.0",
      linkDeploy: "https://projeto-onepeace-2.vercel.app/",
      imagem: "/lista-animes.png",
      descricao:
        "Uma aplicação feita em JavaScript Vanila onde conseguimos ver de forma animada as informações de 6 animes mais falados da atualidade!",
    },
    {
      id: uuidv4(),
      titulo: "Site Cafeteria",
      tecnologias: [
        { icon: FaHtml5, id: 1, color: "text-orange-600" },
        { icon: FaCss3, id: 2, color: "text-blue-400" },
        { icon: DiJavascript1, id: 3, color: "text-yellow-400" },
      ],
      linkRepo: "https://github.com/Anderson-Silva1/SiteCafeteria",
      linkDeploy: "https://site-cafereria.vercel.app/",
      imagem: "/projeto-cafeteria.png",
      descricao:
        "Site desenvolvido junto a equipe Dev Club a fim de aperfeiçoar minhas técnica em FrontEnd. Este foi um dos meus primeiros projetos práticos do zero.",
    },
    {
      id: uuidv4(),
      titulo: "Projeto One Peace",
      tecnologias: [
        { icon: FaHtml5, id: 1, color: "text-orange-600" },
        { icon: FaCss3, id: 2, color: "text-blue-400" },
        { icon: DiJavascript1, id: 3, color: "text-yellow-400" },
      ],
      linkRepo: "https://github.com/Anderson-Silva1/OnePeace-Personagens",
      linkDeploy: "https://one-peace-personagens.vercel.app/",
      imagem: "/projeto-one-peace.png",
      descricao:
        "Um projeto desenvolvido junto a equipe Dev Em Dobro onde aperfeiçoei minhas técnicas como programador, usando CSS para criar os mais variádos estilos e animações...",
    },
    {
      id: uuidv4(),
      titulo: "Relógio JavaScript",
      tecnologias: [
        { icon: FaHtml5, id: 1, color: "text-orange-600" },
        { icon: FaCss3, id: 2, color: "text-blue-400" },
        { icon: DiJavascript1, id: 3, color: "text-yellow-400" },
      ],
      linkRepo: "https://github.com/Anderson-Silva1/Relogio-JavaScript",
      linkDeploy: "https://relogio-java-script.vercel.app/",
      imagem: "/relogio-javascript.png",
      descricao:
        "Este projeto foi feito usando as tecnologias HTML5, CSS3 e JavaScript Vanilla onde marca a hora exata e renderiza na tela de forma altomática, sem precisar fazer o reload na página",
    },

    {
      id: uuidv4(),
      titulo: "Gerador de Imagem",
      tecnologias: [
        { icon: FaHtml5, id: 1, color: "text-orange-600" },
        { icon: FaCss3, id: 2, color: "text-blue-400" },
        { icon: DiJavascript1, id: 3, color: "text-yellow-400" },
      ],
      linkRepo: "https://github.com/Anderson-Silva1/GeradorDeImagem",
      linkDeploy: "https://gerador-de-imagem-seven.vercel.app/",
      imagem: "/projeto-gerador-imagem.png",
      descricao:
        "Uma aplicação web feita com JavaScript que permite aos usuários gerar e exibir a quantidade desejada de imagens obtidas de uma API externa. A interface inclui um campo para definir o número de imagens e um botão para buscá-las, exibindo os resultados de forma organizada.",
    },
  ];

  const projetoPronto = projetos.map((projeto) => {
    return (
      <Projeto
        key={projeto.id}
        id={projeto.id}
        titulo={projeto.titulo}
        tecnologias={projeto.tecnologias}
        linkRepo={projeto.linkRepo}
        linkDeploy={projeto.linkDeploy}
        imagem={projeto.imagem}
        descricao={projeto.descricao}
      />
    );
  });

  return (
    <>
      <section className="bg-slate-900 py-16 text-white" id="projetos">
        <h3 className="mb-8 text-center text-3xl font-bold">Meus Projetos</h3>
        <div className="mx-auto grid max-w-[1280px] place-items-center gap-12 px-[4%] md:grid-cols-2 lg:grid-cols-3">
          {isVerMaisProjetos ? projetoPronto : projetoPronto.slice(0, 6)}
        </div>
        <div className="flex w-full justify-center pt-20">
          <button className="custom-hover-btn" onClick={verMaisProjetos}>
            {botaoTextoProjetos}
          </button>
        </div>
      </section>
    </>
  );
};

export default Projetos;
