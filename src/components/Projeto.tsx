import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

interface ProjetoProps {
  id: string;
  titulo: string;
  tecnologias?: { icon: IconType; id: number; color: string }[]; // ✅ Correto!
  linkRepo: string;
  linkDeploy: string;
  imagem: string;
  descricao: string;
}

const Projeto = ({
  id,
  titulo,
  tecnologias,
  linkRepo,
  linkDeploy,
  imagem,
  descricao,
}: ProjetoProps) => {
  return (
    <div
      key={id}
      className="flex w-full flex-col justify-between rounded-lg bg-[#f6f6f6] p-4 text-black shadow-lg transition hover:scale-105 lg:min-h-[580px]"
    >
      <h2 className="sombra my-4 border-spacing-3 text-center text-3xl font-bold">
        {titulo}
      </h2>

      <div className="w-full rounded-xl border-4 border-black shadow-lg">
        <Image
          alt="Teste"
          src={imagem}
          width={1920} // Defina um valor maior conforme necessário
          height={1080}
          className="h-auto w-full" // Garante que a imagem mantenha a proporção
        />
      </div>

      <div className="flex w-full items-center justify-center gap-4 pt-4">
        {tecnologias
          ? tecnologias.map((Tech) => {
              return (
                <Tech.icon key={Tech.id} className={`size-10 ${Tech.color}`} />
              );
            })
          : null}
      </div>

      <p className="p-4 text-justify text-sm">{descricao}</p>

      <div className="relative flex justify-between p-4">
        <Link href={linkRepo} target="_blank">
          <button className="custom-hover-btn">Respositorio</button>
        </Link>
        <Link href={linkDeploy} target="_blank">
          <button className="custom-hover-btn">Deploy</button>
        </Link>
      </div>
    </div>
  );
};

export default Projeto;
