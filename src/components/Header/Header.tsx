
import { useState, useRef, type MouseEvent, useEffect } from "react";



const menuItems = [

  { label: "Início", href: "#home" },

  { label: "Sobre", href: "#about" },

  { label: "Imóveis", href: "#imoveis" },

  { label: "Depoimentos", href: "#testimonials" },

  { label: "Parcerias", href: "#partners" },

  { label: "Contato", href: "#contact" },

  { label: "Localização", href: "#location" },

];



const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);



  // Fecha menu ao redimensionar (evita bugs de layout)

  useEffect(() => {

    const onResize = () => setMenuOpen(false);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);

  }, []);



  const handleMenuClick = (

    e: MouseEvent<HTMLAnchorElement>,

    href: string

  ) => {

    e.preventDefault();

    setMenuOpen(false);



    const target = document.querySelector(href);



    if (target && headerRef.current) {

      const headerHeight = headerRef.current.offsetHeight;

      const targetPosition = target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({

        top: targetPosition - headerHeight - 8, // -8 pra dar um espaçamento confortável

        behavior: "smooth",

      });

    }

  };



  return (

    <header className="fixed top-0 left-0 w-full z-50">

      <div

        ref={headerRef}

        className="backdrop-blur-md py-5 px-4 md:px-14 flex items-center justify-between"

      >

        {/* Logo e título */}

        <div className="flex items-center space-x-3">

          <span className="text-2xl md:text-3xl font-black text-gold tracking-wide drop-shadow-lg">

            Sabrina Veloso

          </span>

          <span className="hidden md:inline text-lg font-light text-gold/80 italic">

            Corretora Imobiliária

          </span>

        </div>



        {/* Menu de navegação */}

        <nav>

          {/* Botão hambúrguer */}

          <button

            className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2"

            onClick={() => setMenuOpen((prev) => !prev)}

            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}

          >

            <span className={`block h-1 w-7 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>

            <span className={`block h-1 w-7 rounded my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>

            <span className={`block h-1 w-7 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>

          </button>



          {/* Lista de links */}

          <ul

            className={`

              absolute md:static top-full right-0 md:right-auto left-0 md:left-auto

              backdrop-blur-md md:bg-transparent 

              bg-black/80

              shadow-lg md:shadow-none

              flex-col md:flex-row transition-all duration-500

              overflow-hidden

              ${menuOpen ? "flex max-h-96 opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"}

              md:ml-8 flex

              space-x-0 md:space-x-10

            `}

            style={{ alignItems: "flex-end" }}

          >

            {menuItems.map((item) => (

              <li key={item.href}>

                <a

                  href={item.href}

                  onClick={(e) => handleMenuClick(e, item.href)}

                  className="

                    block w-full

                    text-lg font-medium

                    transition duration-300

                    border-b-2 border-transparent

                    pb-2 md:pb-0 px-6 md:px-0 py-3 md:py-0

                    text-right md:text-left

                    text-white hover:text-gold

                    hover:border-gold

                    hover:bg-white/10 focus:outline-none

                  "

                >

                  {item.label}

                </a>

              </li>

            ))}

          </ul>

        </nav>

      </div>

    </header>

  );

};



export default Header;