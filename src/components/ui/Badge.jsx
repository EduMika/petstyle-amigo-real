export default function Badge({ texto, variante = 'naranja' }) {
  const estilos = {
    naranja: 'bg-orange-100 text-orange-800',
    oscuro: 'bg-slate-800 text-white',
    verde: 'bg-emerald-100 text-emerald-800',
  };

  return (
    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${estilos[variante]}`}>
      {texto}
    </span>
  );
}