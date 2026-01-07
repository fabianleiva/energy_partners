import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import "./App.css";
import "animate.css";
import { ParallaxProvider } from "react-scroll-parallax";
import CustomCursor from "./components/CustomCursor";
import { useLenis } from "./hooks/useLenis";

function App() {
  useLenis();
  const [cursorText, setCursorText] = useState(null);

  return (
    <ParallaxProvider>
      <CustomCursor label={cursorText} />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home setCursorText={setCursorText} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
