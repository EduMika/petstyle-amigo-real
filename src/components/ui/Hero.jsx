import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-white border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-amber-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            PETSHOP AMIGO REAL • LÍNEA PETSTYLE
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Viste a tu mejor amigo con <span className="text-orange-600">estilo y confort</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            Descubre nuestra colección de abrigos térmicos, hoodies urbanos, botines y accesorios diseñados especialmente para perros y gatos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/catalogo"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              Ver Catálogo
            </Link>
            <Link
              to="/contacto"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Pedido a Medida
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=80"
            alt="Mascota luciendo prenda PetStyle de Petshop Amigo Real"
            className="rounded-2xl shadow-lg w-full h-80 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}