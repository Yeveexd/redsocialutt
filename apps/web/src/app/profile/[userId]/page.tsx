"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

const mockProfile = {
  id: "1",
  nombre: "Angel Dominguez",
  username: "angel.dominguez",
  matricula: "24330010",
  carrera: "Ingeniería en TIEID",
  cuatrimestre: 7,
  universidad: "Universidad Tecnológica de Torreón",
  biografia:
    "404 NOT FOUND - Creando soluciones, una línea de código a la vez. Me gustan los videojuegos, las novelas graficas y la tecnologia",
  avatar: null,
  stats: {
    publicaciones: 12,
    seguidores: 248,
    siguiendo: 180,
  },
  esAdmin: true,
  publicaciones: [
    { id: 1, titulo: "Proyecto final", imagen: null },
    { id: 2, titulo: "Equipo UTT", imagen: null },
    { id: 3, titulo: "Laboratorio", imagen: null },
    { id: 4, titulo: "Código y café", imagen: null },
    { id: 5, titulo: "Feria UTT", imagen: null },
    { id: 6, titulo: "Vida universitaria", imagen: null },
  ],
};

export default function ProfilePage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<"publicaciones" | "guardados">(
    "publicaciones",
  );
  const esMiPerfil = params.userId === "me";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="text-xl font-bold text-gray-800">
              {esMiPerfil ? "Mi perfil" : "Perfil de usuario"}
            </h1>
          </div>
          <button className="text-gray-700 hover:text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-full bg-[#1B4D3E] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                  {mockProfile.nombre
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-gray-800 truncate">
                    {mockProfile.nombre}
                  </h2>
                  <p className="text-sm text-gray-500 truncate">
                    @{mockProfile.username}
                  </p>
                  <p className="text-sm text-[#1B4D3E] font-medium mt-1">
                    {mockProfile.carrera} • {mockProfile.cuatrimestre}°
                    Cuatrimestre
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-3">
                {mockProfile.biografia}
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                <span>{mockProfile.universidad}</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-gray-800">
                    {mockProfile.stats.publicaciones}
                  </p>
                  <p className="text-xs text-gray-500">Publicaciones</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">
                    {mockProfile.stats.seguidores}
                  </p>
                  <p className="text-xs text-gray-500">Seguidores</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">
                    {mockProfile.stats.siguiendo}
                  </p>
                  <p className="text-xs text-gray-500">Siguiendo</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {esMiPerfil ? (
                <>
                  <button className="w-full bg-white border-2 border-[#1B4D3E] text-[#1B4D3E] font-semibold py-2.5 rounded-lg hover:bg-green-50 transition">
                    Editar perfil
                  </button>
                  {mockProfile.esAdmin && (
                    <button className="w-full bg-white border-2 border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition">
                      Cambiarse al dashboard administrativo
                    </button>
                  )}
                </>
              ) : (
                <button className="w-full bg-[#1B4D3E] text-white font-semibold py-2.5 rounded-lg hover:bg-[#143d31] transition">
                  Seguir
                </button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-sm">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("publicaciones")}
                  className={`flex-1 py-4 px-6 text-sm font-semibold transition ${
                    activeTab === "publicaciones"
                      ? "text-[#1B4D3E] border-b-2 border-[#1B4D3E]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    Publicaciones
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("guardados")}
                  className={`flex-1 py-4 px-6 text-sm font-semibold transition ${
                    activeTab === "guardados"
                      ? "text-[#1B4D3E] border-b-2 border-[#1B4D3E]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    Guardados
                  </span>
                </button>
              </div>

              <div className="p-6">
                {activeTab === "publicaciones" ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {mockProfile.publicaciones.map((pub) => (
                      <div
                        key={pub.id}
                        className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-[#1B4D3E] transition group"
                      >
                        <svg
                          className="w-8 h-8 text-gray-400 group-hover:text-[#1B4D3E] transition"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-xs text-gray-500 mt-2 text-center px-2">
                          {pub.titulo}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    <p className="text-sm">No tienes publicaciones guardadas</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
