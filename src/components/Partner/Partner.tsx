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
  <section className="w-full bg-gray-50 py-12 px-2 sm:px-4 md:px-0">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-900 mb-8 text-center">
        Marcas & Parcerias
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
        {partners.map((partner, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 w-auto mb-2 object-contain"
              loading="lazy"
            />
            <span className="text-sm text-gray-700 text-center">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;