import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Colecciones from './pages/Colecciones';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';

export default function App() {
  const [favoritos, setFavoritos] = useState([1, 4]);

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        <Header />
        <Navbar favoritosCount={favoritos.length} />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Home favoritos={favoritos} onToggleFavorito={toggleFavorito} />}
            />
            <Route
              path="/catalogo"
              element={<Catalogo favoritos={favoritos} onToggleFavorito={toggleFavorito} />}
            />
            <Route
              path="/colecciones"
              element={<Colecciones favoritos={favoritos} onToggleFavorito={toggleFavorito} />}
            />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}