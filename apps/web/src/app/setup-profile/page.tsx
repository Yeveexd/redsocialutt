"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetupProfilePage() {
  const [bio, setBio] = useState("");
  const router = useRouter();
  const [privacidad, setPrivacidad] = useState<"publico" | "privado">(
    "publico",
  );
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    console.log("Perfil configurado:", { bio, privacidad, avatarPreview });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-3">
            <button
              onClick={() => router.push("/register")}
              className="text-gray-700 hover:text-gray-900 transition"
            >
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
              Termina de configurar tu perfil
            </h1>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-[#1B4D3E] h-1.5 rounded-full w-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-[#1B4D3E] h-32"></div>

      <div className="max-w-3xl mx-auto px-6 -mt-20 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-1">
              Hazlo tuyo
            </h2>
            <p className="text-gray-500">
              Comparte quién eres con tu comunidad UTT.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col items-center md:w-64 shrink-0">
              <div className="relative group">
                <div className="w-40 h-40 rounded-full border-2 border-dashed border-[#1B4D3E] bg-green-50 flex items-center justify-center overflow-hidden cursor-pointer transition hover:bg-green-100">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-20 h-20 text-[#1B4D3E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              <button className="text-[#1B4D3E] text-sm font-semibold mt-4 hover:underline">
                Cambiar foto
              </button>
              <p className="text-xs text-gray-400 mt-2 text-center">
                JPG, PNG o GIF. Máx 5MB.
              </p>
            </div>

            <div className="flex-1 space-y-6 min-w-0">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Escribe la biografía que tendrá su perfil:
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Ej. Me gusta los animes y sobre todo el desarrollo web, programadora en proceso."
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] focus:border-transparent resize-none transition"
                />
                <p className="text-xs text-gray-400 mt-1 text-right">
                  {bio.length}/500 caracteres
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Privacidad del perfil
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  ¿Quién puede ver tu perfil?
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPrivacidad("publico")}
                    className={`border-2 rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition ${
                      privacidad === "publico"
                        ? "border-[#1B4D3E] bg-green-50"
                        : "border-gray-300 bg-white hover:border-gray-400"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        privacidad === "publico"
                          ? "border-[#1B4D3E]"
                          : "border-gray-400"
                      }`}
                    >
                      {privacidad === "publico" && (
                        <div className="w-2 h-2 rounded-full bg-[#1B4D3E]"></div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Público
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPrivacidad("privado")}
                    className={`border-2 rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition ${
                      privacidad === "privado"
                        ? "border-[#1B4D3E] bg-green-50"
                        : "border-gray-300 bg-white hover:border-gray-400"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        privacidad === "privado"
                          ? "border-[#1B4D3E]"
                          : "border-gray-400"
                      }`}
                    >
                      {privacidad === "privado" && (
                        <div className="w-2 h-2 rounded-full bg-[#1B4D3E]"></div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Privado
                    </span>
                  </button>
                </div>
              </div>

              <button
                onClick={handleContinue}
                className="w-full bg-[#1B4D3E] text-white font-bold py-3.5 rounded-lg hover:bg-[#143d31] transition shadow-md hover:shadow-lg"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
