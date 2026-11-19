import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import ProductCard from '../components/ui/ProductCard';
import { obtenerProductos } from '../services/productService';

export default function Home({ favoritos, onToggleFavorito }) {
  const [destacados, setDestacados] = useState([]);

  useEffect(() => {
    obtenerProductos().then(({ data }) => setDestacados(data.slice(0, 3)));
  }, []);

  return (
    <div>
      <Hero />

      {/* Contenido Principal */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Favoritos de PetStyle
            </h2>
            <p className="text-slate-600 mt-1">
              Las prendas más solicitadas en Petshop Amigo Real esta temporada.
            </p>
          </div>
          <Link to="/catalogo" className="text-orange-600 font-bold hover:underline">
            Ver los 10 productos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destacados.map((prod) => (
            <ProductCard
              key={prod.id}
              producto={prod}
              esFavorito={favoritos.includes(prod.id)}
              onToggleFavorito={onToggleFavorito}
            />
          ))}
        </div>
      </section>

      {/* Sección CTA */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-orange-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold">
              ¿Necesitas asesoría de tallas para tu engreído?
            </h3>
            <p className="text-orange-100 mt-2">
              El equipo de Petshop Amigo Real te ayuda a elegir el calce perfecto o confeccionarlo a medida.
            </p>
          </div>
          <Link
            to="/contacto"
            className="bg-white text-orange-700 font-bold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors shrink-0"
          >
            Escribir a un Asesor
          </Link>
        </div>
      </section>
    </div>
  );
}