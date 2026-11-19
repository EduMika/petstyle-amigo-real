import { useState, useEffect } from 'react';
import { obtenerProductos } from '../services/productService';
import ProductCard from '../components/ui/ProductCard';
import SearchFilter from '../components/ui/SearchFilter';
import Loader from '../components/ui/Loader';

export default function Catalogo({ favoritos, onToggleFavorito }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');

  useEffect(() => {
    setCargando(true);
    obtenerProductos()
      .then(({ data }) => {
        setProductos(data);
        setError(null);
      })
      .catch(() => setError('No se pudo cargar el catálogo de productos.'))
      .finally(() => setCargando(false));
  }, []);

  const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))];

  const productosFiltrados = productos.filter((p) => {
    const coincideCategoria =
      categoriaActiva === 'Todas' || p.categoria === categoriaActiva;
    const coincideTexto = p.nombre
      .toLowerCase()
      .includes(busqueda.trim().toLowerCase());
    return coincideCategoria && coincideTexto;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-slate-900">Catálogo PetStyle</h1>
        <p className="text-slate-600 mt-1">
          Petshop Amigo Real — {productos.length} productos de moda disponibles.
        </p>
      </div>

      <SearchFilter
        busqueda={busqueda}
        onBusquedaChange={setBusqueda}
        categoriaActiva={categoriaActiva}
        onCategoriaChange={setCategoriaActiva}
        categorias={categorias}
      />

      {cargando && <Loader />}

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200">
          {error}
        </div>
      )}

      {!cargando && !error && productosFiltrados.length === 0 && (
        <div className="bg-amber-50 text-amber-800 p-6 rounded-xl text-center font-medium">
          No se encontraron prendas que coincidan con tu búsqueda.
        </div>
      )}

      {!cargando && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosFiltrados.map((prod) => (
            <ProductCard
              key={prod.id}
              producto={prod}
              esFavorito={favoritos.includes(prod.id)}
              onToggleFavorito={onToggleFavorito}
            />
          ))}
        </div>
      )}
    </section>
  );
}