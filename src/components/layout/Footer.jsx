import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-extrabold text-lg mb-2">
            Petshop Amigo Real • <span className="text-orange-500">PetStyle</span>
          </h3>
          <p className="text-sm text-slate-400">
            Moda, abrigo y accesorios exclusivos para perros y gatos. Prendas confeccionadas con materiales suaves y cortes ergonómicos.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Secciones</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-orange-400">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:text-orange-400">Catálogo Completo</Link></li>
            <li><Link to="/colecciones" className="hover:text-orange-400">Colecciones</Link></li>
            <li><Link to="/contacto" className="hover:text-orange-400">Pedidos a Medida</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Sedes y Atención</h4>
          <p className="text-sm text-slate-400">Sede Carabayllo y Sede Callao — Lima, Perú</p>
          <p className="text-sm text-slate-400 mt-1">Lun a Sáb: 9:00 am – 7:00 pm</p>
          <p className="text-sm text-slate-400 mt-1">contacto@petshopamigoreal.pe</p>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-4 text-xs text-slate-500">
        © {new Date().getFullYear()} Petshop Amigo Real – PetStyle. Proyecto Web con React y Tailwind CSS.
      </div>
    </footer>
  );
}