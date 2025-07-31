//import React from "react";

const LocationSection = () => (
  <section className="w-full py-12 px-2 sm:px-4 md:px-0 section-dark" id="location">
    <div className="max-w-4xl mx-auto">
      <h2 className="section-title mb-6 text-center">
        Onde estamos
      </h2>
      <p className="text-base sm:text-lg mb-8 text-[var(--white)] text-center">
        Venha tomar um café conosco ou agende uma visita! Nosso escritório está localizado em um ponto estratégico para melhor atendê-lo.
      </p>
      <div className="w-full aspect-video rounded-xl overflow-hidden card-glass shadow-lg">
        <iframe
          title="Localização Sabrina Corretora Imobiliária"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.457282393809!2d-46.65657468447547!3d-23.58806836847495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8e4e4e4e4%3A0x1234567890abcdef!2sAvenida%20Paulista%2C%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-center mt-6 text-[var(--white)] text-base sm:text-lg">
        <strong style={{ color: "var(--gold)" }}>Endereço:</strong> Av. Paulista, São Paulo - SP<br />
        <strong style={{ color: "var(--gold)" }}>Telefone:</strong> (11) 99999-9999
      </div>
    </div>
  </section>
);

export default LocationSection;