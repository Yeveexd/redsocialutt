"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    correo: "",
    nombre: "",
    matricula: "",
    carrera: "",
    aceptaTerminos: false,
  });

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.correo.endsWith("@utt.edu.mx")) {
      setError("Solo se permiten correos institucionales @utt.edu.mx");
      return;
    }

    if (!formData.nombre || !formData.matricula || !formData.carrera) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!formData.aceptaTerminos) {
      setError("Debes aceptar el aviso de privacidad");
      return;
    }

    console.log("Registrando:", formData);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-1">
        Completa tu perfil
      </h2>
      <p className="text-center text-gray-500 text-sm mb-6">
        Crea tu cuenta con tu correo institucional para unirte a Coyotegram.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correo institucional
          </label>
          <input
            type="email"
            placeholder="tu.correo@utt.edu.mx"
            value={formData.correo}
            onChange={(e) =>
              setFormData({ ...formData, correo: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D3E]"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Ana López"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D3E]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Matrícula
            </label>
            <input
              type="text"
              placeholder="24330010"
              value={formData.matricula}
              onChange={(e) =>
                setFormData({ ...formData, matricula: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D3E]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Programa educativo
          </label>
          <select
            value={formData.carrera}
            onChange={(e) =>
              setFormData({ ...formData, carrera: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] bg-white"
          >
            <option value="">Selecciona tu carrera</option>
            <option value="ti">Tecnologías de la Información</option>
            <option value="mecatronica">Mecatrónica</option>
            <option value="industrial">Ingeniería Industrial</option>
            <option value="gestion">Gestión Empresarial</option>
            <option value="ambiental">Desarrollo Sustentable</option>
          </select>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terminos"
            checked={formData.aceptaTerminos}
            onChange={(e) =>
              setFormData({ ...formData, aceptaTerminos: e.target.checked })
            }
            className="mt-1 w-4 h-4 accent-[#1B4D3E]"
          />
          <label htmlFor="terminos" className="text-xs text-gray-600">
            Acepto el aviso de privacidad y las normas de la comunidad UTT.
          </label>
        </div>

        {error && <p className="text-red-500 text-xs text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-[#1B4D3E] text-white font-bold py-3 rounded-lg hover:bg-[#143d31] transition"
        >
          Crear perfil universitario
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        ¿Ya tienes cuenta?{" "}
        <a href="/login" className="text-[#1B4D3E] font-bold hover:underline">
          Volver a iniciar sesión
        </a>
      </p>
    </div>
  );
}
