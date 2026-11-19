import Badge from './Badge';

export default function ProductCard({ producto, esFavorito, onToggleFavorito }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <Badge texto={producto.categoria} variante="oscuro" />
          <Badge texto={producto.especie} variante="naranja" />
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-slate-900 text-lg leading-snug">{producto.nombre}</h3>
          <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-2 py-1 rounded shrink-0">
            Talla {producto.talla}
          </span>
        </div>

        <p className="text-slate-500 text-sm mt-2 flex-1">{producto.descripcion}</p>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block">Stock: {producto.stock}</span>
            <span className="text-xl font-extrabold text-orange-600">
              S/ {producto.precio.toFixed(2)}
            </span>
          </div>

          {onToggleFavorito && (
            <button
              type="button"
              onClick={() => onToggleFavorito(producto.id)}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                esFavorito
                  ? 'bg-orange-600 text-white'
                  : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
              }`}
            >
              {esFavorito ? '★ Guardado' : '☆ Favorito'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}