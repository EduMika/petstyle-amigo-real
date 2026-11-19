import { useState, useEffect } from 'react';
import { obtenerProductos } from '../services/productService';
import ProductCard from '../components/ui/ProductCard';
import Badge from '../components/ui/Badge';

export default function Colecciones({ favoritos, onToggleFavorito }) {
  const [especie, setEspecie] = useState('Perro');
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos().then(({ data }) => setProductos(data));
  }, []);

  const filtradosPorEspecie = productos.filter((p) => p.especie === especie);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <Badge texto="COLECCIONES PETSHOP AMIGO REAL" variante="naranja" />
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">
            Moda Especializada para {especie === 'Perro' ? 'Perros' : 'Gatos'}
          </h1>
        </div>

        <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl">
          {['Perro', 'Gato'].map((tipo) => (
            <button
              key={tipo}
              type="button"
              onClick={() => setEspecie(tipo)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                especie === tipo
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Para {tipo}s
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtradosPorEspecie.map((prod) => (
          <ProductCard
            key={prod.id}
            producto={prod}
            esFavorito={favoritos.includes(prod.id)}
            onToggleFavorito={onToggleFavorito}
          />
        ))}
      </div>
    </section>
  );
}