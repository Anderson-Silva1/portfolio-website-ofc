// const BlogContentCard = () => {
//   return (
//     <div className="flex flex-col gap-4 rounded-md bg-white p-4 pr-8 shadow-md">
//       <h3 className="text-lg font-bold capitalize sm:text-xl md:text-2xl">
//         Técnico de Instalação
//       </h3>
//       <span className="text-sm italic">Outubro 2024 - Atual</span>
//       <p className="text-justify text-sm sm:text-base">
//         Após meu estágio na GLNET, comecei a trabalhar com instalação e reparo
//         de internet, aplicando conhecimentos técnicos em redes. Realizo a
//         instalação de pontos de acesso, configuração de roteadores e manutenção
//         de cabeamento, aprimorando minhas habilidades em redes e solução de
//         problemas.
//       </p>
//     </div>
//   );
// };

// export default BlogContentCard;

interface BlogContentCardProps {
  titulo: string;
  data: string;
  texto: string;
  icone?: React.ReactNode | string;
}

const BlogContentCard = ({
  titulo,
  data,
  texto,
  icone,
}: BlogContentCardProps) => {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="flex items-center text-xl font-semibold capitalize text-gray-800 transition-all duration-300 hover:text-blue-600 sm:text-2xl md:text-3xl">
        {titulo}
        {icone ? (
          <span className="ml-2">{icone}</span> // Adicionando um pequeno espaço entre o título e o ícone
        ) : null}
      </h3>

      <span className="text-sm italic text-gray-500">{data}</span>
      <p className="text-justify text-sm text-gray-600 sm:text-base">{texto}</p>
    </div>
  );
};

export default BlogContentCard;
