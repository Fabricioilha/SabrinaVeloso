import React from "react";

const testimonials = [
  {
    name: "Ana Paula",
    text: "A Sabrina foi incrível! Encontrou o imóvel perfeito para minha família com muita atenção e profissionalismo.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Carlos Eduardo",
    text: "Serviço diferenciado, transparente e seguro. Recomendo a todos que buscam imóveis de alto padrão.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Juliana Silva",
    text: "Atendimento personalizado e muita dedicação. Estou muito feliz com minha nova casa!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Testimonials = () => (
  <section className="w-full bg-white py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-900 mb-10 text-center">
        Depoimentos de Clientes
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col items-center text-center"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 border-4 border-pink-200 object-cover"
            />
            <p className="text-gray-700 italic mb-4">"{t.text}"</p>
            <span className="font-semibold text-pink-700">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;