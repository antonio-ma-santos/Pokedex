import { Routes, Route } from "react-router-dom";

import { Home } from "./src/pages/Home";
import { Pokedex } from "./src/pages/Pokedex";

export function RoutesApp() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
  );
}
