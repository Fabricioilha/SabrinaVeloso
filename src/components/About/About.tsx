//import React from "react";

const AboutSection = () => (
  <section id="about" className="w-full py-16 px-4 md:px-0 flex justify-center section-dark">
    <div className="max-w-4xl text-center">
      <h2 className="section-title mb-4">
        Sobre a Sabrina Corretora Imobiliária
      </h2>
      <p className="text-lg md:text-xl mb-6">
        Com atendimento personalizado, experiência de mercado e imóveis exclusivos, a <span className="font-semibold" style={{ color: "var(--gold)" }}>Sabrina Veloso</span> oferece consultoria completa para quem busca luxo, conforto e segurança na hora de comprar, vender ou alugar.
      </p>
      <a
        href="#contact"
        className="btn-gold shadow-lg transition"
      >
        Fale com a Sabrina
      </a>
    </div>
  </section>
);

export default AboutSection;