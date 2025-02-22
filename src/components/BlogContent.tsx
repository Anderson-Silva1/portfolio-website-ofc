"use client";

import { useState } from "react";
import BlogContentCard from "./BlogContentCard";
import BlogHeader from "./BlogHeader";
import { MdOutlineSignalWifiConnectedNoInternet4 } from "react-icons/md";
import { IoSchool } from "react-icons/io5";

const BlogContent = () => {
  const [isVerMais, setIsVerMais] = useState(false);
  const [botaoTexto, setBotaoTexto] = useState("Ver Mais");

  const mudar = () => {
    setIsVerMais((prev) => {
      const novoEstado = !prev;
      // Atualiza o texto do botão de acordo com o estado
      setBotaoTexto(novoEstado ? "Ver Menos" : "Ver Mais");
      return novoEstado;
    });
  };

  const cards = [
    <BlogContentCard
      icone={<MdOutlineSignalWifiConnectedNoInternet4 />}
      titulo="Técnico de Instalação"
      data="Outubro 2024 - Atual"
      texto="Após meu estágio na GLNET, comecei a trabalhar com instalação e reparo de internet, aplicando conhecimentos técnicos em redes. Realizo a instalação de pontos de acesso, configuração de roteadores e manutenção de cabeamento, aprimorando minhas habilidades em redes e solução de problemas."
      key={1}
    />,
    <BlogContentCard
      titulo="Ensino superior"
      data="Outubro 2022 - Atual"
      texto="Iniciei minha graduação na UNESA Estácio de Sá, no curso tecnólogo em Análise e Desenvolvimento de Sistemas. Durante o curso, venho adquirindo conhecimentos em programação, engenharia de software, banco de dados e desenvolvimento de aplicações, preparando-me para atuar na área de tecnologia."
      icone={<IoSchool />}
      key={2}
    />,
    <BlogContentCard
      titulo="Estágio 704 Apps"
      data="Dezembro 2023 - Junho 2024"
      texto="Atuei no suporte ao cliente em uma empresa de aplicativos mobile para mobilidade urbana, realizando atendimentos via e-mail, Jira e CRM. Auxiliei na solução de problemas nos aplicativos, adquirindo experiência em suporte técnico e sistemas mobile, embora sem envolvimento direto com programação."
      key={3}
    />,
    <BlogContentCard
      titulo="Efetivado GLNET - Almoxarifado"
      data="Abril 2021 - Agosto 2021"
      texto="Após meu estágio, fui efetivado na GLNET no almoxarifado, onde gerenciava o controle de estoque e a distribuição de materiais para as equipes de campo. Desenvolvi habilidades em organização e gestão de recursos, mas fui cortado devido a dificuldades financeiras da empresa."
      key={4}
    />,
    <BlogContentCard
      titulo="Efetivado GLNET - Almoxarifado"
      data="Abril 2021 - Agosto 2021"
      texto="Após meu estágio, fui efetivado na GLNET no almoxarifado, onde gerenciava o controle de estoque e a distribuição de materiais para as equipes de campo. Desenvolvi habilidades em organização e gestão de recursos, mas fui cortado devido a dificuldades financeiras da empresa."
      key={5}
    />,
    <BlogContentCard
      titulo="Estágio GLNET 🚀"
      data="janeiro 2021 - Abril 2021"
      texto="Estagiei por 3 meses na GLNET, aplicando conhecimentos em Redes de Computadores na instalação, manutenção de redes e resolução de problemas de conectividade, consolidando minha experiência em infraestrutura de redes."
      key={6}
    />,
    <BlogContentCard
      titulo="Ensino médio Técnico - Redes de computadores 💻"
      data="Janeiro 2019 - Dezembro 2021"
      texto="Formação técnica em redes, programação e engenharia de software, com foco em configuração e segurança de redes, administração de servidores e linguagens de programação. Essencial para minha base tecnológica."
      key={7}
    />,
  ];

  return (
    <div>
      <BlogHeader onClick={mudar} textoBotao={botaoTexto} />
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
        {isVerMais ? cards : cards.slice(0, 4)}
      </div>
    </div>
  );
};

export default BlogContent;
