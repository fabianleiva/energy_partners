import bg3 from "../assets/images/logo_vector.png";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Home = () => {
  return (
    <main className="relative z-10 page-fade-in text-[#fafafa]">
      {/* HOME / HERO */}
      <section
        id="home"
        className="relative scroll-mt-[14vh] min-h-screen border-b border-white/10 overflow-hidden bg-[#163A3D]"
      >
        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none"
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
            <h1 className="mt-3 text-5xl lg:text-7xl font-semibold tracking-tight">
              Experiencia,{" "}
            </h1>
            <h1 className="mt-3 text-5xl lg:text-7xl font-semibold tracking-tight">
              precisión y tecnología{" "}
            </h1>
            <h1 className="mt-3 text-5xl lg:text-5xl tracking-tight">
              al servicio del{" "}
            </h1>
            <h1 className="mt-3 text-5xl lg:text-5xl tracking-tight">
              Sistema eléctrico Nacional{" "}
            </h1>
            <p className="text-lg max-w-2xl mt-16 tracking-wider text-[#fafafa]/60">
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

      {/* SOMOS + SERVICIOS (una sola placa blanca compartida) */}
      <section
        id="somos"
        className="scroll-mt-[14vh] py-24 border-b border-white/10 bg-[#163A3D]"
      >
        <div className="w-[95vw] mx-auto px-5">
          {/* PLACA BLANCA */}
          <div className="bg-[#fafafa] text-black rounded-3xl border border-black/10 shadow-lg overflow-hidden">
            {/* SOMOS (bloque 1) */}
            <div className="px-8 py-10 lg:px-12 lg:py-14">
              <p className="text-sm uppercase tracking-widest text-black/50">
                Somos
              </p>
              <h2 className="mt-3 text-4xl lg:text-6xl font-semibold tracking-tight">
                Representamos, administramos y comercializamos energía.
              </h2>

              {/* Placeholder layout “landing” */}
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <p className="text-black/70 leading-relaxed">
                    (Placeholder) Texto corto: quiénes son, qué hacen y por qué
                    importa. Orientado a operación confiable, transparencia y
                    cumplimiento normativo.
                  </p>

                  <div className="mt-6 space-y-2 text-black/70">
                    <p>• Operación precisa y transparente</p>
                    <p>• Cumplimiento CEN / CNE / SEC</p>
                    <p>• Gestión y administración de energía</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-black/[0.03] min-h-[240px] flex items-center justify-center">
                  <p className="text-black/40">Imagen / gráfico (placeholder)</p>
                </div>
              </div>
            </div>

            {/* Divider entre bloques */}
            <div className="h-px w-full bg-black/10" />

            {/* SERVICIOS (bloque 2) */}
            <div
              id="servicios"
              className="px-8 py-10 lg:px-12 lg:py-14"
            >
              <p className="text-sm uppercase tracking-widest text-black/50">
                Servicios
              </p>
              <h2 className="mt-3 text-4xl lg:text-6xl font-semibold tracking-tight">
                Soluciones para generadores y comercializadores
              </h2>

              {/* Grid de servicios (placeholder) */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Representación y coordinación",
                  "Liquidaciones y procesos",
                  "Reportes y compliance",
                  "Monitoreo en tiempo real",
                  "Indicadores y desempeño",
                  "Gestión operativa",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-black/10 bg-white p-6"
                  >
                    <p className="font-semibold">{t}</p>
                    <p className="mt-2 text-sm text-black/60">
                      Descripción corta (placeholder) del servicio.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATAFORMA */}
      <section
        id="plataforma"
        className="scroll-mt-[14vh] py-24 border-b border-white/10 bg-[#163A3D]"
      >
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-sm uppercase tracking-widest text-[#fafafa]/60">
            Plataforma
          </p>
          <h2 className="mt-3 text-4xl lg:text-6xl font-semibold tracking-tight">
            Monitoreo, reportes y trazabilidad
          </h2>
          <div className="mt-12 rounded-2xl border border-white/10 p-8 min-h-[400px]" />
        </div>
      </section>

      {/* CLIENTES */}
      <section
        id="clientes"
        className="scroll-mt-[14vh] min-h-[55vh] py-24 border-b border-white/10 bg-[#163A3D]"
      >
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-sm uppercase tracking-widest text-[#fafafa]/60">
            Clientes
          </p>
          <h2 className="mt-3 text-4xl lg:text-6xl font-semibold tracking-tight">
            Empresas que confían en nuestra gestión
          </h2>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="scroll-mt-[14vh] min-h-[70vh] py-24 bg-[#163A3D]"
      >
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-sm uppercase tracking-widest text-[#fafafa]/60">
            Contacto
          </p>
          <h2 className="mt-3 text-4xl lg:text-6xl font-semibold tracking-tight">
            Hablemos
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Home;
