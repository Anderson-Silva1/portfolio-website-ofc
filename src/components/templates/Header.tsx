"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoHeader from "../LogoHeader";
import NavHeader from "../NavHeader";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Se o usuário está rolando para baixo, esconda o cabeçalho
        setVisible(false);
      } else {
        // Se o usuário está rolando para cima, mostre o cabeçalho
        setVisible(true);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para não permitir valores negativos
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup da função quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 h-20 w-full bg-gray-800 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="m-auto flex h-full max-w-[1280px] items-center justify-between px-4">
        <LogoHeader />

        {/* Ícone do menu para resoluções menores que 1024px (lg) */}
        <button
          className="block text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Menu normal (Desktop: aparece somente acima de 1024px) */}
        <div className="hidden lg:flex">
          <NavHeader isMobile={false} />
        </div>
      </div>

      {/* Menu Mobile (aparece abaixo de 1024px) */}
      {menuOpen && <NavHeader isMobile={true} />}
    </header>
  );
};

export default Header;
