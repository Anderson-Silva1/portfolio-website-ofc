import { JSX } from "react";

interface BlogFormacao {
  cards: JSX.Element[]; // Define que "cards" é um array de elementos JSX
  isFormacoes: boolean; // Estado booleano que controla a exibição
  isFormacoesFunc: (e: React.MouseEvent<HTMLButtonElement>) => void; // Função de clique para alternar estado
}

const BlogFormacao = ({
  cards,
  isFormacoes,
  isFormacoesFunc,
}: BlogFormacao) => {
  return (
    <>
      <div className="bg-principal">
        <div className="m-auto max-w-[1280px]">
          <div className="py-8">
            <h2 className="title">Formações</h2>
            <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
              {isFormacoes ? cards : cards.slice(0, 4)}
            </div>
            <div className="flex justify-center p-10">
              <button
                className="custom-hover-btn bg-escura"
                onClick={isFormacoesFunc}
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

export default BlogFormacao;
