import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import "./App.css";
import "animate.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { useLenis } from "./hooks/useLenis";
import logoEP from "./assets/images/svg_logo_ep_1.png";

function App() {
  useLenis();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const minDelay = new Promise((res) => setTimeout(res, 1500));
    const pageLoad = new Promise((res) => {
      if (document.readyState === "complete") res();
      else window.addEventListener("load", res, { once: true });
    });
    Promise.all([minDelay, pageLoad]).then(() => setLoaded(true));
  }, []);

  return (
    <ParallaxProvider>
      <div
        className={`fixed inset-0 z-[999] bg-[#163A3D] flex flex-col items-center justify-center gap-8 transition-opacity duration-700 pointer-events-none ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <img src={logoEP} alt="Energy Partners" className="w-48" />
        <div className="flex gap-3">
          <span className="w-3 h-3 rounded-full bg-[#fafafa] animate-[bounce_0.8s_ease-in-out_infinite]" style={{ animationDelay: "0s" }} />
          <span className="w-3 h-3 rounded-full bg-[#fafafa] animate-[bounce_0.8s_ease-in-out_infinite]" style={{ animationDelay: "0.2s" }} />
          <span className="w-3 h-3 rounded-full bg-[#fafafa] animate-[bounce_0.8s_ease-in-out_infinite]" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
