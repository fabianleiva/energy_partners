import {
  HiOutlineCog6Tooth,
  HiOutlineCheckBadge,
  HiOutlinePresentationChartLine,
  HiOutlineSignal,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineDocumentText,
  HiOutlineArrowsRightLeft,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import StackedAreaChart from "../components/StackedAreaChart";
import BubbleChart from "../components/BubbleChart";
import SimpleBarChart from "../components/SimpleBarChart";
import enel from "../assets/images/enel.png";
import ferrero from "../assets/images/ferrero.png";
import gami from "../assets/images/gami.png";
import genersur from "../assets/images/genersur.png";
import grpower from "../assets/images/grpower.png";
import novasurLogo from "../assets/images/Logo NovaSur_transparent.png";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import bg3 from "../assets/images/logo_vector.png";
import logoEP from "../assets/images/svg_logo_ep_1.png";

const Home = () => {
  const platformRef = useRef(null);
  const [platformInView, setPlatformInView] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) setHasScrolled(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // 👇 esperar 1 frame para que el navegador restaure scroll
    requestAnimationFrame(() => {
      onScroll();
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = platformRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlatformInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px 0px 200px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative z-10 page-fade-in text-[#fafafa]">
      {/* HOME / HERO */}
      <section
        id="home"
        className="relative scroll-mt-[14vh] min-h-screen overflow-hidden bg-[#163A3D]"
      >
        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none blur-[0.5px] brightness-75"
          style={{
            backgroundImage: `url(${bg3})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />

        {/* Overlay opcional para contraste (si lo necesitas) */}
        <div className="absolute inset-0 pointer-events-none" />

        {/* Contenido */}
        <div className="relative z-10 max-w-[90vw] mx-auto px-5">
          <div className="min-h-[100vh] flex flex-col justify-center text-left">
            <h1 className="mt-6 lg:mt-24 text-5xl lg:text-7xl font-semibold tracking-wide">
              Experiencia,{" "}
            </h1>
            <h1 className="mt-3 text-5xl lg:text-7xl font-semibold tracking-wide">
              precisión y{" "}
            </h1>

            <div className="lg:flex items-baseline">
              <h1 className="mt-3 text-5xl lg:text-7xl font-semibold tracking-wide mr-5">
                tecnología{" "}
              </h1>{" "}
              <h1 className="mt-3 text-5xl lg:text-5xl tracking-wide font-light">
                al servicio del{" "}
              </h1>
            </div>

            <h1 className="mt-3 text-5xl lg:text-5xl tracking-wide font-light">
              Sistema eléctrico Nacional{" "}
            </h1>
            <p className="text-lg max-w-2xl mt-16 tracking-widest text-[#fafafa]/60">
              Representamos, administramos y comercializamos energía con una
              operación confiable, transparente y alineada a los estándares del
              CEN, CNE y SEC.
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
            <IoArrowDownCircleOutline className="text-[#fafafa] text-5xl opacity-60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* SOMOS */}
      <section
        id="somos"
        className="scroll-mt-[14vh] pt-6 lg:pt-24 bg-[#163A3D]"
      >
        <div className="w-[94vw] mx-auto">
          <div className="bg-[#fafafa] text-black/80 rounded-3xl shadow-lg overflow-hidden">
            <div className="px-8 pt-12 lg:pt-28 pb-12 lg:px-12 lg:pb-40">
              {/* Header centrado: icono + "Somos Energy Partners" */}
              <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-baseline lg:gap-3">
                {" "}
                {/* Logo centrado */}
                <div className="flex justify-center w-full lg:w-auto">
                  <img
                    src="/src/assets/images/logo_noText.png"
                    alt="Energy Partners"
                    className="h-16 w-auto sm:h-20 lg:h-32"
                  />
                </div>
                {/* Texto */}
                <p className="text-center text-3xl tracking-wide text-black/25 sm:text-4xl lg:text-left lg:text-5xl">
                  Somos{" "}
                  <span className="italic font-semibold">Energy Partners</span>
                </p>
              </div>

              {/* Layout principal 2 filas */}
              <div
                className="
            mt-28
            mx-6 sm:mx-10 lg:mx-20
            flex flex-col gap-10 lg:gap-14
            items-start text-start
          "
              >
                {/* Arriba */}
                <div>
                  <h2
                    className="
                text-[22px] sm:text-[28px] lg:text-5xl
                leading-[1.25] sm:leading-[1.2]
                tracking-wide sm:tracking-widest
                break-words
              "
                  >
                    <span className="font-bold mr-5">Guiamos</span>
                    <span className="font-light">
                      a centrales de generación
                    </span>
                    <br />
                    <span className="font-light mr-5">en la</span>
                    <span className="font-bold mr-5">gestión y operación</span>
                    <span className="font-light">de su</span>
                    <br />
                    <span className="font-light mr-5">producción</span>
                    <span className="font-bold">energética</span>
                    <span className="font-light mr-5">,</span>
                    <span className="font-light mr-5">dentro del</span>
                    <br />
                    <span className="font-bold">
                      Sistema Eléctrico Nacional
                    </span>
                  </h2>
                </div>

                {/* Abajo */}
                <div className="w-full">
                  <p
                    className="
                text-[18px] sm:text-[22px] lg:text-2xl
                font-light
                leading-[1.5] sm:leading-[1.1]
                tracking-wide sm:tracking-widest
                ml-0 lg:ml-[25vw]
                max-w-none lg:max-w-[80vw]
              "
                  >
                    Entregamos una operación precisa y transparente, alineada
                    con la normativa vigente, que permite a cada central de
                    generación operar con continuidad, trazabilidad y plena
                    confianza dentro del Sistema Eléctrico Nacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-8 py-10 mt-20 lg:px-12 lg:py-14">
        <h2 className="text-center text-2xl font-semibold uppercase tracking-wider text-[#00AA2B]">
          Servicios
        </h2>

        <h3 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight text-center">
          Soluciones para generadores y comercializadores
        </h3>

        <h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-center">
          del Sistema Eléctrico Nacional
        </h3>

        {/* Grid de servicios */}
        <div className="mt-20 grid grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 lg:px-32">
          {[
            {
              title: "Representación y\nAdministración de\nCentrales",
              desc: "Gestión operativa y\ncomercial ante el CEN",
              Icon: HiOutlineCog6Tooth,
            },
            {
              title: "Declaraciones y\nLiquidaciones MCP",
              desc: "Gestión operativa y\ncomercial ante el CEN",
              Icon: HiOutlineCheckBadge,
            },
            {
              title: "Reportes\nOperacionales y\nRegulatorios",
              desc: "Gestión operativa y\ncomercial ante el CEN",
              Icon: HiOutlinePresentationChartLine,
            },
            {
              title: "Monitoreo en\nTiempo Real",
              desc: "Gestión operativa y\ncomercial ante el CEN",
              Icon: HiOutlineSignal,
            },
            {
              title: "Indicadores de\nRendimiento",
              desc: "Gestión operativa y\ncomercial ante el CEN",
              Icon: HiOutlineClipboardDocumentCheck,
            },
            {
              title: "Facturación y\nConciliación\nHistórica",
              desc: "Gestión operativa y\ncomercial ante el CEN",
              Icon: HiOutlineDocumentText,
            },
            {
              title: "Compra y Venta de\nEnergía",
              desc: "Gestión operativa y\ncomercial ante el CEN",
              Icon: HiOutlineArrowsRightLeft,
            },
            {
              title: "Evaluación y\nValorización de\nContratos",
              desc: "Gestión operativa y\ncomercial ante el CEN",
              Icon: HiOutlineArrowPathRoundedSquare,
            },
          ].map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="
          rounded-2xl bg-white
          border border-black/10
          shadow-[0_18px_40px_rgba(0,0,0,0.12)]
          px-8 pt-8 pb-9
          min-h-[200px] lg:min-h-[230px]
          flex flex-col items-center justify-between text-center
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.16)]
        "
            >
              <div className="w-full max-w-[260px] mx-auto">
                <p className="text-lg sm:text-xl font-semibold leading-snug text-[#1A1C1D] whitespace-pre-line">
                  {title}
                </p>

                <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-black/40 whitespace-pre-line">
                  {desc}
                </p>
              </div>

              <Icon className="mt-6 lg:mt-8 text-[#00AA2B] text-[44px] sm:text-[52px] lg:text-[60px]" />
            </div>
          ))}
        </div>
      </section>

      {/* PLATAFORMA */}
      <section
        id="plataforma"
        ref={platformRef}
        className="scroll-mt-[14vh] px-6 sm:px-8 py-10 lg:px-12 lg:py-20"
      >
        <div className="bg-[#fafafa] text-black/80 rounded-3xl border border-black/10 shadow-lg overflow-hidden">
          <div className="w-full mx-auto">
            {/* Header */}
            <div className="px-6 sm:px-8 py-10 lg:px-12 lg:pt-28">
              <h2 className="text-center text-2xl font-semibold uppercase tracking-wider text-[#00AA2B]">
                Plataforma
              </h2>

              <h3 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight text-center">
                Integración directa con CEN y monitoreo en tiempo real
              </h3>

              <h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-center">
                para una operación energética más eficiente
              </h3>
            </div>

            {/* Monitoreo en tiempo real */}
            <div className="px-6 sm:px-8 py-10 lg:px-12 lg:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-3 text-center">
                  <h3 className="text-3xl lg:text-2xl font-semibold tracking-tight leading-tight mb-8 lg:mb-10">
                    Monitoreo
                    <br />
                    en Tiempo Real
                  </h3>

                  <div className="mt-4 lg:mt-6 space-y-2 lg:space-y-3 text-black/60 text-md leading-relaxed">
                    <p>Lectura horaria de generación y retiros.</p>
                    <p>Actualización continua de variables operativas.</p>
                    <p>Seguimiento del costo marginal por barra.</p>
                    <p>Tendencias para anticipar desvíos operacionales.</p>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <div className="w-full h-[220px] sm:h-[260px] lg:h-[360px]">
                    <div className="block sm:hidden h-full">
                      <StackedAreaChart compact />
                    </div>
                    <div className="hidden sm:block h-full">
                      <StackedAreaChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribución Operativa */}
            <div className="px-6 sm:px-8 py-10 lg:px-12 lg:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Texto */}
                <div className="order-1 lg:order-2 lg:col-span-3 text-center">
                  <h3 className="text-3xl lg:text-2xl font-semibold tracking-tight leading-tight mb-8 lg:mb-10">
                    Distribución
                    <br />
                    Operativa
                  </h3>

                  <div className="mt-4 lg:mt-6 space-y-2 lg:space-y-3 text-black/60 text-md leading-relaxed">
                    <p>Participación por central y unidad.</p>
                    <p>Composición física de inyecciones y retiros.</p>
                    <p>Balance energético del sistema.</p>
                    <p>Comparación proporciones entre activos.</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="order-2 lg:order-1 lg:col-span-9 ">
                  <div className="order-2 lg:order-1 lg:col-span-9">
                    <div className="w-full h-[220px] sm:h-[260px] lg:h-[360px]">
                      {platformInView ? (
                        <>
                          <div className="block sm:hidden h-full">
                            <BubbleChart compact />
                          </div>
                          <div className="hidden sm:block h-full">
                            <BubbleChart />
                          </div>
                        </>
                      ) : (
                        <div className="h-full w-full" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicadores de Rendimiento */}
            <div className="px-6 sm:px-8 py-10 lg:px-12 lg:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-3 text-center">
                  <h3 className="text-3xl lg:text-2xl font-semibold tracking-tight leading-tight mb-8 lg:mb-10">
                    Indicadores
                    <br />
                    de Rendimiento
                  </h3>

                  <div className="mt-4 lg:mt-6 space-y-2 lg:space-y-3 text-black/60 text-md leading-relaxed">
                    <p>Comparativo de potencia programada vs. realizada.</p>
                    <p>Indicadores de eficiencia operativa.</p>
                    <p>Análisis de desempeño por central.</p>
                    <p>Detección de desvíos respecto al presupuesto.</p>
                  </div>
                </div>

                <div className="lg:col-span-9 ">
                  <div className="lg:col-span-9">
                    <div className="w-full h-[220px] sm:h-[260px] lg:h-[360px]">
                      {platformInView ? (
                        <>
                          <div className="block sm:hidden h-full">
                            <SimpleBarChart compact />
                          </div>
                          <div className="hidden sm:block h-full">
                            <SimpleBarChart />
                          </div>
                        </>
                      ) : (
                        <div className="h-full w-full" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section
        id="clientes"
        className="scroll-mt-[14vh] py-24 bg-[#163A3D] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-wider text-[#00AA2B]">
            Clientes
          </h2>
          <h3 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight text-center text-[#fafafa]">
            Empresas que confían en nuestra gestión
          </h3>

          {/* Carrusel */}
          <div className="mt-16 relative">
            {/* Fade laterales (opcional, se ve pro) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#163A3D] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#163A3D] to-transparent z-10" />

            <div className="marquee">
              <div className="marquee__track">
                {/* Lista 1 */}
                {[enel, ferrero, gami, genersur, grpower].map((src, i) => (
                  <div key={`a-${i}`} className="marquee__item">
                    <img
                      src={src}
                      alt={`Cliente ${i + 1}`}
                      className="h-12 lg:h-14 w-auto opacity-85 hover:opacity-100 transition-opacity duration-300"
                      draggable={false}
                    />
                  </div>
                ))}

                {/* Lista 2 (duplicada para loop infinito) */}
                {[enel, ferrero, gami, genersur, grpower].map((src, i) => (
                  <div key={`b-${i}`} className="marquee__item">
                    <img
                      src={src}
                      alt={`Cliente ${i + 1}`}
                      className="h-12 lg:h-14 w-auto opacity-85 hover:opacity-100 transition-opacity duration-300"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Botón/píldora */}
          <div className="mt-36 mb-20 flex flex-col items-center px-10">
            {/* <p className="mb-6">Main Partner</p> */}
            <a
              href="https://novasur.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="
      group
      w-full max-w-[520px]
      bg-white
      rounded-full
      px-10 py-7
      shadow-[0_24px_60px_rgba(0,0,0,0.25)]
      border border-black/10
      flex items-center justify-center
      transition-transform duration-300
      hover:-translate-y-[2px]
      active:translate-y-0
    "
              aria-label="Ir a Energías Novasur"
            >
              <img
                src={novasurLogo}
                alt="Energías Novasur"
                className="h-14 md:h-16 w-auto"
                draggable="false"
              />
            </a>

            <p className="mt-6 italic text-white/55 text-sm">Haz click aquí</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="scroll-mt-[14vh] min-h-[75vh] py-24 bg-[#c0c0c0]"
      >
        {/* Wrapper */}
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-8 lg:px-[100px]">
          {/* Titulares */}
          <p className="text-center text-2xl font-semibold uppercase tracking-wider text-[#00AA2B]">
            Contacto
          </p>
          <h2 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight text-center text-black/80">
            Hablemos
          </h2>

          {/* Grid */}
          <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 sm:gap-y-14 lg:gap-y-0 gap-x-10 items-start">
            {/* Menú – solo desktop */}
            <nav className="hidden lg:block lg:col-span-1 text-left">
              <p className="font-bold text-black/80 mb-6 text-2xl">Menu</p>
              <div className="flex flex-col gap-6 text-lg text-black/80">
                <a
                  href="#home"
                  className="hover:text-black/60 transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="#somos"
                  className="hover:text-black/60 transition-colors"
                >
                  Somos
                </a>
                <a
                  href="#servicios"
                  className="hover:text-black/60 transition-colors"
                >
                  Servicios
                </a>
                <a
                  href="#plataforma"
                  className="hover:text-black/60 transition-colors"
                >
                  Plataforma
                </a>
                <a
                  href="#clientes"
                  className="hover:text-black/60 transition-colors"
                >
                  Clientes
                </a>
                <a
                  href="#contacto"
                  className="hover:text-black/60 transition-colors"
                >
                  Contacto
                </a>
              </div>
            </nav>

            {/* Dirección */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <p className="font-bold text-black/80 mb-6 text-2xl">Dirección</p>
              <div className="text-black/45 leading-[1.25] font-light text-2xl">
                <p>Carlos XI 138,</p>
                <p>Las Condes</p>
                <p>RM</p>
                <p>Chile</p>
              </div>
            </div>

            {/* Contacto */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <p className="font-bold text-black/80 mb-6 text-2xl">Contacto</p>
              <a
                href="mailto:operaciones@eep.cl"
                className="text-black/45 hover:text-black/60 transition-colors text-2xl font-light break-words"
              >
                operaciones@eep.cl
              </a>
            </div>

            {/* Logo desktop: dentro de la última columna (col-span-2), abajo a la derecha */}
            <div className="hidden lg:flex lg:col-span-2 justify-end self-end">
              <img
                src={logoEP}
                alt="Energy Partners"
                className="h-auto w-[240px] object-contain"
              />
            </div>
          </div>
          {/* Logo mobile – centrado real */}
          <div className="lg:hidden mt-16 flex justify-center">
            <img
              src={logoEP}
              alt="Energy Partners"
              className="h-auto w-[170px] sm:w-[200px] object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
