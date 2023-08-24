import { Navigate, Route, Routes } from "react-router-dom";
import { Topbar } from "./components/commons/Topbar";
import { Adopcion, AdopcionAleatoria, Ayudar, Home, Login, Perfil, QuienesSomos } from "./components/pages";
import { Toaster } from "react-hot-toast";

export const App = () => {

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Topbar/>}>
          <Route path="quienes-somos" element={<QuienesSomos/>}/>
          <Route path="adopcion" element={<Adopcion/>}/>
          <Route path="" element={<Home/>}/>
          <Route path="adopcion-aleatoria" element={<AdopcionAleatoria/>}/>
          <Route path="ayudar" element={<Ayudar/>}/>
          <Route path="perfil" element={<Perfil/>}/>
        </Route>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </div>
  );
};
