import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showInfoText, setShowInfoText] = useState(false);

  const toggleInfo = () => setShowInfoText((prev) => !prev);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToSection = (id) => {
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(id), 60);
    } else {
      scrollToId(id);
    }
    setShowInfoText(false);
  };

  const LinkBtn = ({ id, label, className = "" }) => (
    <button
      type="button"
      onClick={() => goToSection(id)}
      className={`text-[#fafafa] transition-colors hover:text-[#d6d6d6] ${className}`}
    >
      {label}
    </button>
  );

  return (
    <header>
      <nav className="fixed top-0 left-0 z-[100] w-full px-6 py-5 font-work-sans tracking-tight font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO — sin tocar tamaño */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => goToSection("home")}
              className="flex items-center"
            >
              <img
                src="/src/assets/images/logo_ep_1.png"
                alt="Energy Partners"
                className="max-w-80"
              />
            </button>
          </div>

          {/* LINKS DESKTOP — alineados verticalmente con el logo */}
          <div className="hidden lg:flex items-center gap-6 text-lg">
            <LinkBtn id="home" label="Home" />
            <LinkBtn id="somos" label="Somos" />
            <LinkBtn id="servicios" label="Servicios" />
            <LinkBtn id="plataforma" label="Plataforma" />
            <LinkBtn id="clientes" label="Clientes" />
            <LinkBtn id="contacto" label="Contacto" />
          </div>

          {/* BOTÓN MOBILE */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleInfo}
              className="text-[#fafafa] transition-transform duration-300"
              aria-label="Abrir menú"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                className={`transform transition-transform duration-300 ${
                  showInfoText ? "rotate-45" : "rotate-0"
                }`}
              >
                <path
                  d="M12 5v14m-7-7h14"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ MOBILE */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#0e1620] z-[90] flex flex-col items-center justify-center transition-opacity duration-500 ${
          showInfoText
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <LinkBtn id="home" label="Home" className="text-2xl mb-6" />
        <LinkBtn id="somos" label="Somos" className="text-2xl mb-6" />
        <LinkBtn id="servicios" label="Servicios" className="text-2xl mb-6" />
        <LinkBtn id="plataforma" label="Plataforma" className="text-2xl mb-6" />
        <LinkBtn id="clientes" label="Clientes" className="text-2xl mb-6" />
        <LinkBtn id="contacto" label="Contacto" className="text-2xl" />
      </div>
    </header>
  );
};

export default NavigationBar;
