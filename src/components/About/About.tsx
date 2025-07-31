//import React from "react";

const AboutSection = () => (
  <section id="about" className="w-full py-20 px-4 md:px-24 section-dark flex flex-col items-center">
    <h2 className="section-title mb-10 text-center">Sobre Mim</h2>
    <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
        alt="Sabrina Veloso"
        className="w-72 rounded-lg grayscale hover:grayscale-0 transition duration-300 shadow-lg"
        style={{ minWidth: 220 }}
      />
      <div className="max-w-xl text-lg leading-relaxed about-text">
        <p>
          Com mais de 10 anos no mercado de imóveis de luxo, ajudo clientes exigentes a encontrarem propriedades únicas.<br /><br />
          Cada imóvel é escolhido com carinho, atenção aos detalhes e exclusividade.<br /><br />
          Minha missão é transformar sonhos em residências reais, sempre com discrição, sofisticação e profissionalismo.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;