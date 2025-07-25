import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 shadow-lg py-6 px-4 md:px-8 flex items-center justify-between relative">
      <div className="flex items-center space-x-3">
        <span className="text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Sabrina Veloso
        </span>
        <span className="hidden md:inline text-lg font-light text-pink-200 italic">
          Corretora Imobiliária
        </span>
      </div>
      {/* Menu de navegação */}
      <nav className="flex items-center">
        {/* Botão do menu hamburguer à direita */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menu"
        >
          <span
            className={`block h-1 w-7 bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-7 bg-white rounded my-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-7 bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        <ul
          className={`flex-col md:flex-row flex md:flex space-x-0 md:space-x-8 absolute md:static top-full right-0 md:right-auto left-0 md:left-auto w-full md:w-auto bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 md:bg-none z-20 md:z-auto overflow-hidden
            transition-all duration-300
            ${menuOpen ? "max-h-96 opacity-100 flex" : "max-h-0 opacity-0 pointer-events-none md:opacity-100 md:max-h-full md:flex"}
            md:ml-8`}
          style={{ alignItems: "flex-end" }}
        >
          <li>
            <a
              href="#home"
              className="block text-white text-lg font-medium hover:text-pink-300 transition duration-200 border-b-2 border-transparent hover:border-pink-400 pb-1 px-6 md:px-0 py-3 md:py-0 text-right md:text-left"
              onClick={() => setMenuOpen(false)}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#properties"
              className="block text-white text-lg font-medium hover:text-pink-300 transition duration-200 border-b-2 border-transparent hover:border-pink-400 pb-1 px-6 md:px-0 py-3 md:py-0 text-right md:text-left"
              onClick={() => setMenuOpen(false)}
            >
              Imóveis
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-white text-lg font-medium hover:text-pink-300 transition duration-200 border-b-2 border-transparent hover:border-pink-400 pb-1 px-6 md:px-0 py-3 md:py-0 text-right md:text-left"
              onClick={() => setMenuOpen(false)}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-white text-lg font-medium hover:text-pink-300 transition duration-200 border-b-2 border-transparent hover:border-pink-400 pb-1 px-6 md:px-0 py-3 md:py-0 text-right md:text-left"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;