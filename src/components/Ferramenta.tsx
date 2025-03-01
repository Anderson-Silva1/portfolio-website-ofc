interface FerramentasProps {
  color: string;
  Icone: React.ElementType;
  NameTecnologia: string;
}

const Ferramenta = ({ color, Icone, NameTecnologia }: FerramentasProps) => {
  return (
    <>
      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md transition hover:scale-105">
        <Icone className={`text-4xl ${color}`} />
        <h3 className="mt-2 text-center text-lg font-semibold">
          {NameTecnologia}
        </h3>
      </div>
    </>
  );
};

export default Ferramenta;
