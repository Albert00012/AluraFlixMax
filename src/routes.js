import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Home from "./pages/Home";
import Agregar from "./pages/Agregar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Agregar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;