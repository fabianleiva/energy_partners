import bg3 from "../assets/images/logo_vector.png";
import { IoArrowDownCircleOutline } from "react-icons/io5";
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
            <h1 className="mt-3 text-5xl lg:text-7xl font-semibold tracking-wide">
              Experiencia,{" "}
            </h1>
            <h1 className="mt-3 text-5xl lg:text-7xl font-semibold tracking-wide">
              precisión y{" "}
            </h1>

            <div className="flex items-baseline">
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
      <section id="somos" className="scroll-mt-[14vh] pt-24 bg-[#163A3D]">
        <div className="w-[94vw] mx-auto">
          <div className="bg-[#fafafa] text-black/80 rounded-3xl border border-black/10 shadow-lg overflow-hidden">
            <div className="px-8 pt-28 pb-12 lg:px-12 lg:pb-40">
              {/* Header centrado: icono + "Somos Energy Partners" */}
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/src/assets/images/logo_noText.png"
                  alt="Energy Partners"
                  className="h-24 w-auto"
                />
                <p className="text-5xl tracking-wide mt-8 text-black/25">
                  Somos{" "}
                  <span className="italic font-semibold">Energy Partners</span>
                </p>
              </div>

              {/* Layout principal 2 filas */}
              <div className="mt-28 mx-20 flex flex-col gap-10 lg:gap-14 items-start text-start">
                {/* Arriba*/}
                <div>
                  <h2 className="text-[28px] sm:text-[32px] lg:text-5xl leading-[1.2] tracking-widest">
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

                {/* Abajo*/}
                <div>
                  <p className="text-[28px] sm:text-[32px] lg:text-2xl font-light leading-[1.1] tracking-widest ml-[25vw]">
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
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-32">
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
          min-h-[230px]
          flex flex-col items-center justify-between text-center
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.16)]
        "
            >
              <div className="w-full max-w-[260px] mx-auto">
                <p className="text-xl font-semibold leading-snug text-[#1A1C1D] whitespace-pre-line">
                  {title}
                </p>

                <p className="mt-4 text-lg leading-relaxed text-black/40 whitespace-pre-line">
                  {desc}
                </p>
              </div>

              <Icon className="mt-8 text-[#00AA2B] text-[60px]" />
            </div>
          ))}
        </div>
      </section>

      {/* PLATAFORMA */}
      <section
        id="plataforma"
        ref={platformRef}
        className="scroll-mt-[14vh] px-8 py-10 lg:px-12 lg:py-20"
      >
        <div className="bg-[#fafafa] text-black/80 rounded-3xl border border-black/10 shadow-lg overflow-hidden">
          <div className="w-[94vw] mx-auto">
            <div className="px-8 py-10 lg:px-12 lg:pt-28">
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
            <div className="px-8 py-10 lg:px-12 lg:py-14">
              {/* Contenedor 2 columnas en desktop, 1 columna en mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* IZQUIERDA (1/4 aprox) */}
                <div className="lg:col-span-3 text-center">
                  <h3 className="text-3xl lg:text-2xl font-semibold tracking-tight leading-tight mb-10">
                    Monitoreo
                    <br />
                    en Tiempo Real
                  </h3>

                  <div className="mt-6 space-y-3 text-black/60 text-md leading-relaxed">
                    <p>Lectura horaria de generación y retiros.</p>
                    <p>Actualización continua de variables operativas.</p>
                    <p>Seguimiento del costo marginal por barra.</p>
                    <p>Tendencias para anticipar desvíos operacionales.</p>
                  </div>
                </div>

                {/* DERECHA (3/4 aprox) */}
                <div className="lg:col-span-9">
                  {platformInView ? (
                    <StackedAreaChart />
                  ) : (
                    <div className="h-[360px] w-full" />
                  )}
                </div>
              </div>
            </div>

            {/* Distribución Operativa */}
            <div className="px-8 py-10 lg:px-12 lg:py-14">
              {/* Contenedor 2 columnas en desktop, 1 columna en mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* IZQUIERDA (3/4 aprox) */}
                <div className="lg:col-span-9">
                  {platformInView ? (
                    <BubbleChart />
                  ) : (
                    <div className="h-[360px] w-full" />
                  )}
                </div>
                {/* DERECHA (1/4 aprox) */}
                <div className="lg:col-span-3 text-center">
                  <h3 className="text-3xl lg:text-2xl font-semibold tracking-tight leading-tight mb-10">
                    Distribución
                    <br />
                    Operativa
                  </h3>

                  <div className="mt-6 space-y-3 text-black/60 text-md leading-relaxed">
                    <p>Participación por central y unidad.</p>
                    <p>Composición física de inyecciones y retiros.</p>
                    <p>Balance energético del sistema.</p>
                    <p>Comparación proporciones entre activos.</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicadores de Rendimiento */}
            <div className="px-8 py-10 lg:px-12 lg:py-14">
              {/* Contenedor 2 columnas en desktop, 1 columna en mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* IZQUIERDA (1/4 aprox) */}
                <div className="lg:col-span-3 text-center">
                  <h3 className="text-3xl lg:text-2xl font-semibold tracking-tight leading-tight mb-10">
                    Indicadores
                    <br />
                    de Rendimiento
                  </h3>

                  <div className="mt-6 space-y-3 text-black/60 text-md leading-relaxed">
                    <p>Comparativo de potencia programada vs. realizada.</p>
                    <p>Indicadores de eficiencia operativa.</p>
                    <p>Análisis de desempeño por central.</p>
                    <p>Detección de desvíos respecto al presupuesto.</p>
                  </div>
                </div>

                {/* DERECHA (3/4 aprox) */}
                <div className="lg:col-span-9">
                  {platformInView ? (
                    <SimpleBarChart />
                  ) : (
                    <div className="h-[360px] w-full" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section
        id="clientes"
        className="scroll-mt-[14vh] min-h-[55vh] py-24 bg-[#163A3D]"
      >
          <h2 className="text-center text-2xl font-semibold uppercase tracking-wider text-[#00AA2B]">
            Clientes
          </h2>
          <h3 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight text-center">
            Empresas que confían en nuestra gestión
          </h3>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="scroll-mt-[14vh] min-h-[70vh] py-24 bg-[#9d9d9d]"
      >
        <p className="text-sm uppercase tracking-widest text-[#fafafa]/60">
          Contacto
        </p>
        <h2 className="mt-3 text-4xl lg:text-6xl font-semibold tracking-tight">
          Hablemos
        </h2>
      </section>
    </main>
  );
};

export default Home;

{
  /* SERVICIOS */
}
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
  <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-32">
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
          min-h-[230px]
          flex flex-col items-center justify-between text-center
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.16)]
        "
      >
        <div className="w-full max-w-[260px] mx-auto">
          <p className="text-xl font-semibold leading-snug text-[#1A1C1D] whitespace-pre-line">
            {title}
          </p>

          <p className="mt-4 text-lg leading-relaxed text-black/40 whitespace-pre-line">
            {desc}
          </p>
        </div>

        <Icon className="mt-8 text-[#00AA2B] text-[60px]" />
      </div>
    ))}
  </div>
</section>;
