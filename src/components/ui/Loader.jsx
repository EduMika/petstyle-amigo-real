export default function Loader({ mensaje = 'Cargando catálogo de PetStyle...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-600 font-medium text-sm">{mensaje}</p>
    </div>
  );
}