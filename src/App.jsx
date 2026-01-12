import { useState } from "react";
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
  const [cursorText, setCursorText] = useState(null);

  return (
    <ParallaxProvider>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
