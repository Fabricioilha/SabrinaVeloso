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
    <section className="w-full py-12 px-2 sm:px-4 md:px-0 section-dark" id="contact">
      <div className="max-w-xl mx-auto card-glass p-4 sm:p-8">
        <h2 className="section-title mb-6 text-center">
          Fale com a Sabrina
        </h2>
        {enviado ? (
          <div className="text-green-400 text-center text-lg font-semibold py-8">
            Mensagem enviada com sucesso! Em breve entraremos em contato.
          </div>
        ) : (
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1" htmlFor="nome" style={{ color: "var(--gold)" }}>
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={form.nome}
                onChange={handleChange}
                className="w-full border border-[var(--border)] bg-transparent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] transition text-[var(--white)]"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="email" style={{ color: "var(--gold)" }}>
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-[var(--border)] bg-transparent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] transition text-[var(--white)]"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="telefone" style={{ color: "var(--gold)" }}>
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                className="w-full border border-[var(--border)] bg-transparent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] transition text-[var(--white)]"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="mensagem" style={{ color: "var(--gold)" }}>
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={4}
                value={form.mensagem}
                onChange={handleChange}
                className="w-full border border-[var(--border)] bg-transparent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] transition text-[var(--white)] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full btn-gold shadow-lg transition"
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