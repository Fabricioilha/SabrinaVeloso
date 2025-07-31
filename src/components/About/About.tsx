//import React from "react";

const AboutSection = () => (
  <section id="about" className="w-full bg-white py-16 px-4 md:px-0 flex justify-center">
    <div className="max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-900 mb-4">
        Sobre a Sabrina Corretora Imobiliária
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Com atendimento personalizado, experiência de mercado e imóveis exclusivos, a <span className="font-semibold text-pink-700">Sabrina Veloso</span> oferece consultoria completa para quem busca luxo, conforto e segurança na hora de comprar, vender ou alugar.
      </p>
      <a
        href="#contact"
        className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
      >
        Fale com a Sabrina
      </a>
    </div>
  </section>
);

export default AboutSection;