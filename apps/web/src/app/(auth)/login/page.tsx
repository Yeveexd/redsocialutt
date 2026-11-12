"use client";

import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      setError("Correo institucional requerido");
    }, 1500);
  };

  return (
    <div className="bg-white rounded-t-3xl p-8 shadow-lg">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-1">
        Tu comunidad te espera
      </h2>
      <p className="text-center text-gray-500 text-sm mb-6">
        Accede con tu cuenta institucional y conecta con la UTT.
      </p>

      <button
        onClick={handleLogin}
        disabled={loading}
        className="w-full border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="animate-spin h-5 w-5 border-2 border-green-800 border-t-transparent rounded-full"></span>
        ) : (
          <span className="font-bold text-green-800 text-sm">UTT</span>
        )}
        <span className="text-gray-700 font-medium text-sm">
          {loading
            ? "Conectando con tu cuenta UTT..."
            : "Iniciar sesión con UTT"}
        </span>
      </button>

      <p className="text-center text-xs text-gray-400 mt-4">
        Solo cuentas @utt.edu.mx
      </p>

      {error && (
        <div className="flex items-center justify-center gap-1 mt-3">
          <svg
            className="w-4 h-4 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-red-500 text-xs font-medium">{error}</p>
        </div>
      )}

      {/* 
      <div className="flex items-center justify-center gap-1 mt-3">
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-green-600 text-xs font-medium">Cuenta verificada. Todo listo.</p>
      </div>
      */}

      <p className="text-center text-sm text-gray-600 mt-6">
        ¿Primera vez aquí?{" "}
        <a
          href="/register"
          className="text-green-700 font-bold hover:underline"
        >
          Regístrate
        </a>
      </p>
    </div>
  );
}
