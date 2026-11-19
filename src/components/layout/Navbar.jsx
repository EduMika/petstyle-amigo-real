import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar({ favoritosCount }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
      isActive
        ? 'bg-orange-600 text-white'
        : 'text-slate-700 hover:bg-orange-50 hover:text-orange-600'
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="bg-orange-600 text-white font-extrabold px-2.5 py-1 rounded-lg text-base">
              AR
            </span>
            <div className="leading-tight">
              <span className="block font-extrabold text-lg tracking-tight text-slate-900">
                Pet<span className="text-orange-600">Style</span>
              </span>
              <span className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                by Petshop Amigo Real
              </span>
            </div>
          </Link>

          {/* Enlaces en Escritorio */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={linkClass}>Inicio</NavLink>
            <NavLink to="/catalogo" className={linkClass}>Catálogo</NavLink>
            <NavLink to="/colecciones" className={linkClass}>Colecciones</NavLink>
            <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/catalogo"
              className="bg-amber-100 text-orange-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5"
            >
              <span>Favoritos</span>
              <span className="bg-orange-600 text-white px-2 py-0.5 rounded-full text-xs">
                {favoritosCount}
              </span>
            </Link>

            {/* Botón hamburguesa para celular */}
            <button
              type="button"
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuAbierto ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable en celular */}
      {menuAbierto && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white border-t border-slate-100 flex flex-col">
          <NavLink to="/" onClick={() => setMenuAbierto(false)} className={linkClass}>Inicio</NavLink>
          <NavLink to="/catalogo" onClick={() => setMenuAbierto(false)} className={linkClass}>Catálogo</NavLink>
          <NavLink to="/colecciones" onClick={() => setMenuAbierto(false)} className={linkClass}>Colecciones</NavLink>
          <NavLink to="/contacto" onClick={() => setMenuAbierto(false)} className={linkClass}>Contacto</NavLink>
        </div>
      )}
    </nav>
  );
}