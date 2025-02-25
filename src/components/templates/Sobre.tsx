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
          <h2 className="text-center text-2xl font-bold capitalize leading-snug sm:text-3xl md:text-left md:text-4xl">
            Olá, me chamo Anderson e sou <br /> <EscritaAltomatica />
          </h2>
        </div>
        <p className="mt-8 text-center text-sm opacity-95 sm:text-base md:indent-8 lg:text-justify">
          {/* Sou cristão, atuo como Representante de Missões e Professor de Escola
          Bíblica Dominical. Cursando Análise e Desenvolvimento de Sistemas, meu
          objetivo é me tornar Analista de Sistemas e combinar fé com tecnologia
          para melhorar a vida da minha família e contribuir para a sociedade. */}
          Sou graduando em Análise e Desenvolvimento de Sistemas, com
          experiência em atividades técnicas relacionadas à infraestrutura de
          redes e suporte em tecnologia.
        </p>
        <p className="my-2 text-center text-sm opacity-95 sm:text-base md:indent-8 lg:text-justify">
          {/* Sou cristão, atuo como Representante de Missões e Professor de Escola
          Bíblica Dominical. Cursando Análise e Desenvolvimento de Sistemas, meu
          objetivo é me tornar Analista de Sistemas e combinar fé com tecnologia
          para melhorar a vida da minha família e contribuir para a sociedade. */}
          Tenho perfil analítico, comunicativo e sou motivado a combinar minha
          formação em tecnologia com meus valores cristãos. Busco a posição de
          Analista de Sistemas (ou outro cargo), com o objetivo de aplicar
          minhas habilidades para melhorar a eficiência dos sistemas e
          contribuir para o sucesso da empresa.
        </p>
        <p className="mb-8 text-center text-sm opacity-95 sm:text-base md:indent-8 lg:text-justify">
          {/* Sou cristão, atuo como Representante de Missões e Professor de Escola
          Bíblica Dominical. Cursando Análise e Desenvolvimento de Sistemas, meu
          objetivo é me tornar Analista de Sistemas e combinar fé com tecnologia
          para melhorar a vida da minha família e contribuir para a sociedade. */}
          Estou determinado a agregar valor e superar as expectativas.
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
