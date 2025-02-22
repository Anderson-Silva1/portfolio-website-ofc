// import Image from "next/image";
// import EscritaAltomatica from "../EscritaAltomatica";

// const Sobre = () => {
//   return (
//     <section className="m-auto flex h-screen w-full max-w-[1280px] items-center justify-around gap-20 p-10">
//       <section className="flex flex-col items-start">
//         <div>
//           <h2 className="text-4xl font-bold capitalize leading-tight">
//             Olá, me chamo Anderson e sou <br /> <EscritaAltomatica />
//           </h2>
//         </div>
//         <p className="my-16 text-justify text-base opacity-95">
//           Sou cristão, atuo como Representante de Missões e Professor de Escola
//           Bíblica Dominical. Cursando Análise e Desenvolvimento de Sistemas, meu
//           objetivo é me tornar Analista de Sistemas e combinar fé com tecnologia
//           para melhorar a vida da minha família e contribuir para a sociedade.
//         </p>
//         <div className="bg-red-300">
//           <a
//             href="/curriculo.pdf"
//             download="Curriculo-Anderson_Dev.pdf"
//             className="w-full"
//           >
//             <button className="custom-hover-btn">Currículo</button>
//           </a>
//         </div>
//       </section>
//       <section>
//         <div className="h-[350px] w-[350px]">
//           <Image
//             src="https://avatars.githubusercontent.com/u/168702409?s=400&u=61cbabe2349292368538f86bc876de53bf66c69e&v=4"
//             alt="minha foto"
//             width={350}
//             height={350}
//             className="rounded-full"
//           />
//         </div>

//         {/* <img
//           src="https://avatars.githubusercontent.com/u/168702409?s=400&u=61cbabe2349292368538f86bc876de53bf66c69e&v=4"
//           alt="minha imagem"
//         /> */}
//         {/* <div className="h-[350px] w-[350px] rounded-full bg-principal"></div> */}
//       </section>
//     </section>
//   );
// };

// export default Sobre;

import Image from "next/image";
import EscritaAltomatica from "../EscritaAltomatica";

const Sobre = () => {
  return (
    <section
      className="m-auto mt-20 flex w-full max-w-[1280px] flex-col-reverse items-center gap-10 p-6 py-16 lg:flex-row lg:justify-around lg:gap-20 lg:p-10 lg:py-36"
      id="sobre"
    >
      {/* Seção de texto */}
      <section className="flex max-w-lg flex-col items-center lg:items-start">
        <div>
          <h2 className="text-2xl font-bold capitalize leading-snug sm:text-3xl md:text-4xl">
            Olá, me chamo Anderson e sou <br /> <EscritaAltomatica />
          </h2>
        </div>
        <p className="my-8 text-center text-sm opacity-95 sm:text-base lg:text-justify">
          Sou cristão, atuo como Representante de Missões e Professor de Escola
          Bíblica Dominical. Cursando Análise e Desenvolvimento de Sistemas, meu
          objetivo é me tornar Analista de Sistemas e combinar fé com tecnologia
          para melhorar a vida da minha família e contribuir para a sociedade.
        </p>
        <div className="w-full max-w-[200px]">
          <a href="/curriculo.pdf" download="Curriculo-Anderson_Dev.pdf">
            <button className="custom-hover-btn w-full">
              Baixar Currículo
            </button>
          </a>
        </div>
      </section>

      {/* Seção da imagem */}
      <section>
        <div className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px]">
          <Image
            src="https://avatars.githubusercontent.com/u/168702409?s=400&u=61cbabe2349292368538f86bc876de53bf66c69e&v=4"
            alt="minha foto"
            width={350}
            height={350}
            className="rounded-full object-cover"
          />
        </div>
      </section>
    </section>
  );
};

export default Sobre;
