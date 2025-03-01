"use client";

import { useState } from "react";
import BlogContentCard from "./BlogContentCard";
import BlogFormacao from "./BlogFormacao";
import BlogExperiencias from "./BlogExperiencias";

const BlogContent = () => {
  // const [isVerMais, setIsVerMais] = useState(false);
  // const [botaoTexto, setBotaoTexto] = useState("Ver Mais");

  // const mudar = () => {
  //   setIsVerMais((prev) => {
  //     const novoEstado = !prev;
  //     // Atualiza o texto do botão de acordo com o estado
  //     setBotaoTexto(novoEstado ? "Ver Menos" : "Ver Mais");
  //     return novoEstado;
  //   });
  // };

  const [isFormacoes, setIsFormacoes] = useState(false);

  const isFormacoesFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsFormacoes(!isFormacoes);

    if (isFormacoes) {
      (e.target as HTMLButtonElement).innerText = "Ver mais";
    } else {
      (e.target as HTMLButtonElement).innerText = "Ver menos";
    }
  };

  const [isExperiencias, setIsExperiencias] = useState(false);

  const isExperienciasFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsExperiencias(!isExperiencias);

    if (isExperiencias) {
      (e.target as HTMLButtonElement).innerText = "Ver mais";
    } else {
      (e.target as HTMLButtonElement).innerText = "Ver menos";
    }
  };

  const cardsFormacoes = [
    <BlogContentCard
      titulo="Graduando em Análise e Desenvolvimento de Sistemas - UNESA Estácio de Sá &#128640;&#128187;&#128218;"
      data="Outubro 2022 - Atual"
      texto="Durante a graduação, venho desenvolvendo minhas habilidades em: 1) Programação e desenvolvimento de aplicações; 2) Engenharia de software e banco de dados; 3) Estrutura de dados e boas práticas em desenvolvimento. Essa formação tem ampliado meu conhecimento na area de tecnologia e fortalecendo minha base"
      key={2}
    />,

    <BlogContentCard
      titulo="Técnico em Redes de Computadores - EEEP Ícaro de Sousa Moreira 💻"
      data="Janeiro 2019 - Dezembro 2021"
      texto="Formação técnica com ênfase em: 1) Redes de computadores: Configuração, segurânça e administração de redes; 2) Programação: Desenvolvimento de soluções e linguagem de programação; 3) Engenharia de software: Aplicação de boas práticas no desnvolvimento de sistemas. Essa formação foi fundamental para meu desenvolvimento técnico, proporcionando uma base sólida em infraestrutura de redes e programação."
      key={7}
    />,
  ];

  const cardsExperiencias = [
    <BlogContentCard
      titulo="Técnico de Instalação &#128666;"
      data="Outubro 2024 - Atual"
      texto="Atuo no ramo de instalação e repero de redes de internet, realizando: 1) Configurações de roteadores e instalação de pontos de acesso para melhor desempenho da rede; 2) Manutenção e reparos de cabeamentos estruturados, garantindo conexões estáveis; 3) Diagnósticos e soluções de problemas técnicos, aprimorando a experiência do cliente. Essa experiência tem fortalecido minhas habilidades em redes de computadores, suporte técnico e resoluções de problemas."
      key={1}
    />,
    <BlogContentCard
      titulo="Estágio 704 Apps &#128640;"
      data="Dezembro 2023 - Junho 2024"
      texto="Atuei no suporte ao cliente pelo Jira, email e CRM para Fabrica de Aplicativos 704Apps, uma empresa focada em aplicativos de mobilidade urbana. Nela, trabalhe na: 1) Identificação e resolução de problemas nos aplicativos, garantindo uma melhor experiência ao usuário; 2) Registro e acompanhamento de chamados técnicos, colaborando com a equipe de desenvolvimento; 3) Análise de incidentes para otimizar processos e reduzir recorrências. Essa experiência aprimorou minhas habilidades em suporte técnico, atendimento ao cliente e sistemas mobile"
      key={3}
    />,
    <BlogContentCard
      titulo="Efetivado GLNET - Almoxarifado &#128640;"
      data="Abril 2021 - Agosto 2021"
      texto="Como efetivado na GLNET, atuei no almoxarifado com foco em: 1) Controle de estoque e distibuição de materiais para as equipes do campo; 2) Organizações de insumos para otimizar processos e reduzir disperdícios; 3) Monitoramento de entradas e saídas, garantindo precisão nos registros."
      key={4}
    />,
    <BlogContentCard
      titulo="Estágio GLNET &#128640;"
      data="janeiro 2021 - Abril 2021"
      texto="Durante meu estágio na GLNET, atuei diretamente em: 1) Instalação e manutenção de redes de computadores, assegurando a confiabilidade e eficiência das conexões; 2) Diagnósticos e resoluções de problemas de conectividade, contribuindo para a melhoria contínua da infraestrutura; 3) Suporte técnico em projetos de expansão e melhorias na infraestrutura de TI. Essa experiência consolidou minha expertize em redes de computadores e me preparou para desafios técnicos na área de infraestrutura de TI."
      key={6}
    />,
  ];

  return (
    <div className="flex flex-col gap-5 text-white">
      <BlogFormacao
        cards={cardsFormacoes}
        isFormacoesFunc={isFormacoesFunc}
        isFormacoes={isFormacoes}
      />

      <BlogExperiencias
        cards={cardsExperiencias}
        isExperienciasFunc={isExperienciasFunc}
        isExperiencias={isExperiencias}
      />
    </div>
  );
};

export default BlogContent;
