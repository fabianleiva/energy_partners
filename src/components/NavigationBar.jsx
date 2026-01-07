import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showInfoText, setShowInfoText] = useState(false);
  const toggleInfo = () => setShowInfoText((prev) => !prev);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Si estás en otra ruta (por ahora solo "/" igual), navega a "/" y luego scrollea
  const goToSection = (id) => {
    if (pathname !== "/") {
      navigate("/", { replace: false });
      // espera al render y luego scrollea
      setTimeout(() => scrollToId(id), 50);
    } else {
      scrollToId(id);
    }
    setShowInfoText(false);
  };

  const LinkBtn = ({ id, label, className = "" }) => (
    <button
      onClick={() => goToSection(id)}
      className={`transition-colors hover:text-[#848484] ${className}`}
      type="button"
    >
      {label}
    </button>
  );

  return (
    <header>
      <nav className="fixed top-0 left-0 z-[100] p-5 w-full font-work-sans tracking-tight font-medium">
        <div className="grid items-center gap-5 grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr]">
          <div className="flex justify-start">
            <button
              type="button"
              onClick={() => goToSection("home")}
              className="text-3xl font-work-sans tracking-tight flex items-center duration-200 group whitespace-nowrap"
            >
              <div className="flex items-center transition-colors group-hover:text-[#848484]">
                <img
                  className="max-w-80"
                  src="/src/assets/images/logo_ep_1.png"
                  alt="logo"
                />
              </div>
            </button>
          </div>

          <div className="hidden lg:flex justify-end text-lg gap-4">
            <LinkBtn id="home" label="Home" />
            <LinkBtn id="somos" label="Somos" />
            <LinkBtn id="servicios" label="Servicios" />
            <LinkBtn id="plataforma" label="Plataforma" />
            <LinkBtn id="clientes" label="Clientes" />
            <LinkBtn id="contacto" label="Contacto" />
          </div>
        </div>

        {/* Botón "+" móvil */}
        <div className="lg:hidden absolute right-5 top-5">
          <button
            onClick={toggleInfo}
            className="text-3xl cursor-pointer transition-transform duration-300"
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
              <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="4" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#fafafa] z-[90] flex flex-col items-center justify-center transition-opacity duration-500 ${
          showInfoText ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <LinkBtn id="home" label="Home" className="text-2xl mb-6 text-[#adadad] hover:text-[#000000]" />
        <LinkBtn id="somos" label="Somos" className="text-2xl mb-6 text-[#adadad] hover:text-[#000000]" />
        <LinkBtn id="servicios" label="Servicios" className="text-2xl mb-6 text-[#adadad] hover:text-[#000000]" />
        <LinkBtn id="plataforma" label="Plataforma" className="text-2xl mb-6 text-[#adadad] hover:text-[#000000]" />
        <LinkBtn id="clientes" label="Clientes" className="text-2xl mb-6 text-[#adadad] hover:text-[#000000]" />
        <LinkBtn id="contacto" label="Contacto" className="text-2xl text-[#adadad] hover:text-[#000000]" />
      </div>
    </header>
  );
};

export default NavigationBar;
