import { useState } from 'react';

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    sede: 'Carabayllo',
    mascota: 'Perro',
    talla: 'M',
    mensaje: '',
  });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const nuevosErrores = {};
    if (!form.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!form.correo.includes('@')) nuevosErrores.correo = 'Ingresa un correo electrónico válido.';
    if (form.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'Describe tu consulta en al menos 10 caracteres.';
    }
    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacion = validar();
    setErrores(validacion);

    if (Object.keys(validacion).length === 0) {
      setEnviado(true);
      setForm({ nombre: '', correo: '', sede: 'Carabayllo', mascota: 'Perro', talla: 'M', mensaje: '' });
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">Contacto y Pedidos a Medida</h1>
      <p className="text-slate-600 mt-1 mb-8">
        Envía tu consulta a <strong>Petshop Amigo Real</strong> y te asesoramos con la talla exacta para tu mascota.
      </p>

      {enviado && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl mb-6 font-medium">
          ¡Solicitud enviada con éxito! Un asesor de Petshop Amigo Real te responderá muy pronto.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-5"
      >
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Tu Nombre</label>
          <input
            type="text"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none"
            placeholder="Ej. Eduardo Gómez"
          />
          {errores.nombre && <p className="text-red-600 text-xs mt-1">{errores.nombre}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Correo Electrónico</label>
          <input
            type="email"
            value={form.correo}
            onChange={(e) => setForm({ ...form, correo: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none"
            placeholder="correo@ejemplo.com"
          />
          {errores.correo && <p className="text-red-600 text-xs mt-1">{errores.correo}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Sede Preferida</label>
            <select
              value={form.sede}
              onChange={(e) => setForm({ ...form, sede: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white"
            >
              <option value="Carabayllo">Carabayllo</option>
              <option value="Callao">Callao</option>
              <option value="Delivery Lima">Delivery Lima</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Mascota</label>
            <select
              value={form.mascota}
              onChange={(e) => setForm({ ...form, mascota: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white"
            >
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Talla Estimada</label>
            <select
              value={form.talla}
              onChange={(e) => setForm({ ...form, talla: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white"
            >
              <option value="S">S (Pequeña)</option>
              <option value="M">M (Mediana)</option>
              <option value="L">L (Grande)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Detalle del Pedido o Consulta</label>
          <textarea
            rows="4"
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none"
            placeholder="Indícanos raza, medidas aproximadas o prenda que te interesa..."
          />
          {errores.mensaje && <p className="text-red-600 text-xs mt-1">{errores.mensaje}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition-colors cursor-pointer"
        >
          Enviar Solicitud
        </button>
      </form>
    </section>
  );
}