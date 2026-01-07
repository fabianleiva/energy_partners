const Home = () => {
  return (
    <main className="relative z-10 mt-[12vh] px-5 page-fade-in text-[#fafafa]">
      
      {/* HOME / HERO */}
      <section id="home" className="scroll-mt-[14vh] min-h-screen py-[12vh] border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#fafafa]/60">Home</p>
          <h1 className="mt-3 text-5xl lg:text-7xl font-semibold tracking-tight">
            Generación eléctrica en operación
          </h1>
        </div>
      </section>

      {/* SOMOS (más corta) */}
      <section id="somos" className="scroll-mt-[14vh] min-h-[70vh] py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#fafafa]/60">Somos</p>
          <h2 className="mt-3 text-4xl lg:text-6xl font-semibold tracking-tight">
            Representamos, administramos y comercializamos energía.
          </h2>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="scroll-mt-[14vh] min-h-[80vh] py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#fafafa]/60">Servicios</p>
          <h2 className="mt-3 text-4xl lg:text-6xl font-semibold tracking-tight">
            Soluciones para generadores y comercializadores
          </h2>
        </div>
      </section>

      {/* PLATAFORMA (larga, sin min height fijo) */}
      <section id="plataforma" className="scroll-mt-[14vh] py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#fafafa]/60">Plataforma</p>
          <h2 className="mt-3 text-4xl lg:text-6xl font-semibold tracking-tight">
            Monitoreo, reportes y trazabilidad
          </h2>

          {/* Aquí irá tu gráfico + tabla, se alarga natural */}
          <div className="mt-12 rounded-2xl border border-white/10 p-8 min-h-[400px]" />
        </div>
      </section>

      {/* CLIENTES (corta) */}
      <section id="clientes" className="scroll-mt-[14vh] min-h-[55vh] py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#fafafa]/60">Clientes</p>
          <h2 className="mt-3 text-4xl lg:text-6xl font-semibold tracking-tight">
            Empresas que confían en nuestra gestión
          </h2>
        </div>
      </section>

      {/* CONTACTO (mediana) */}
      <section id="contacto" className="scroll-mt-[14vh] min-h-[70vh] py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#fafafa]/60">Contacto</p>
          <h2 className="mt-3 text-4xl lg:text-6xl font-semibold tracking-tight">
            Hablemos
          </h2>
        </div>
      </section>

    </main>
  );
};

export default Home;
