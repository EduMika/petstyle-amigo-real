export default function SearchFilter({
  busqueda,
  onBusquedaChange,
  categoriaActiva,
  onCategoriaChange,
  categorias,
}) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="w-full md:w-96">
        <input
          type="text"
          value={busqueda}
          onChange={(e) => onBusquedaChange(e.target.value)}
          placeholder="Buscar abrigo, polera, collar..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="flex flex-wrap gap-2 w-full md:w-auto">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onCategoriaChange(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
              categoriaActiva === cat
                ? 'bg-orange-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}