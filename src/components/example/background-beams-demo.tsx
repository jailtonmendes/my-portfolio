"use client";
import { BackgroundBeams } from "../ui/background-beams";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Jailton Mendes
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-base text-center relative z-10">
          Olá, sou formado em Redes de Computadores e pós-graduado em Análise de
          Sistemas. Com uma paixão por tecnologia e inovação, tenho dedicado
          minha carreira ao desenvolvimento de sistemas e software. Estou sempre
          em busca de novos conhecimentos e desafios que me permitam crescer
          pessoal e profissionalmente.
        </p>
      </div>
      <BackgroundBeams />

      {/* <h2 className="text-xl text-neutral-300">Em construção...</h2> */}
    </div>
  );
}
