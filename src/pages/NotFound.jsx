import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <span className="text-7xl font-extrabold text-orange-600">404</span>
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-4">
        ¡Ups! Esta página salió a pasear
      </h1>
      <p className="text-slate-600 mt-2 max-w-md">
        La ruta que buscas no existe en PetStyle de Petshop Amigo Real. Regresa al inicio para ver nuestras prendas.
      </p>
      <Link
        to="/"
        className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}