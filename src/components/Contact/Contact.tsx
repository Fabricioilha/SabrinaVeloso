import React, { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    // Aqui você pode integrar com um serviço de envio de e-mail ou API
  };

  return (
    <section className="w-full bg-gray-50 py-12 px-2 sm:px-4 md:px-0" id="contact">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-900 mb-6 text-center">
          Fale com a Sabrina
        </h2>
        {enviado ? (
          <div className="text-green-600 text-center text-lg font-semibold py-8">
            Mensagem enviada com sucesso! Em breve entraremos em contato.
          </div>
        ) : (
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="nome">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={form.nome}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="telefone">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="mensagem">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={4}
                value={form.mensagem}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
            >
              Enviar mensagem
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;