import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import "./App.css";
import "animate.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { useLenis } from "./hooks/useLenis";

function App() {
  useLenis();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => setLoaded(true);
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <ParallaxProvider>
      <div
        className={`fixed inset-0 z-[999] bg-[#163A3D] transition-opacity duration-700 pointer-events-none ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
