import { JSX } from "react";

interface BlogExperienciasProps {
  cards: JSX.Element[]; // Define que "cards" é um array de elementos JSX
  isExperiencias: boolean; // Estado booleano que controla a exibição
  isExperienciasFunc: (e: React.MouseEvent<HTMLButtonElement>) => void; // Função de clique para alternar estado
}

const BlogExperiencias = ({
  cards,
  isExperiencias,
  isExperienciasFunc,
}: BlogExperienciasProps) => {
  return (
    <>
      <div className="bg-principal">
        <div className="m-auto max-w-[1280px]">
          <div className="py-8">
            <h2 className="title">Experiências</h2>
            <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
              {isExperiencias ? cards : cards.slice(0, 2)}
            </div>
            <div className="flex justify-center p-10">
              <button
                className="custom-hover-btn bg-escura"
                onClick={isExperienciasFunc}
              >
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogExperiencias;
