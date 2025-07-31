//import React from "react";

const Footer = () => (
  <footer className="w-full py-6 px-4 mt-8" style={{ background: "var(--bg-alt)", color: "var(--gold)" }}>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left mb-2 md:mb-0">
        © {new Date().getFullYear()} Sabrina Corretora Imobiliária. Todos os direitos reservados.
      </div>
      <div className="flex space-x-4">
        <a
          href="https://wa.me/5511999999"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--white)] transition"
        >
          WhatsApp
        </a>
        <a
          href="mailto:contato@sabrinacorretora.com"
          className="hover:text-[var(--white)] transition"
        >
          E-mail
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--white)] transition"
        >
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;