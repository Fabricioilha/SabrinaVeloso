//import React from "react";

const partners = [
  {
    name: "Construtora Alpha",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Imóveis Beta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
  },
  {
    name: "Incorporadora Luxo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  },
  {
    name: "Residencial Gamma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
];

const PartnersSection = () => (
  <section className="w-full py-12 px-2 sm:px-4 md:px-0 section-dark">
    <div className="max-w-5xl mx-auto">
      <h2 className="section-title mb-8 text-center">Marcas & Parcerias</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
        {partners.map((partner, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 w-auto mb-2 object-contain card-glass"
              loading="lazy"
            />
            <span className="text-sm text-[var(--gold)] text-center">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;