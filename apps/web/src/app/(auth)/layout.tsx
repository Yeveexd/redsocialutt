export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#065F46] 50% to-[#F9FAFB] 50% flex flex-col items-center">
      <div className="flex flex-col items-center pt-16 pb-8">
        <div className="w-50 h-50 flex items-center justify-center mb-4">
          <img
            src="/coyote.png"
            className="w-40 h-40 object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <h1 className="text-white text-3xl font-bold mb-2">Coyotegram</h1>
        <p className="text-white/80 text-sm text-center">
          Conecta, colabora y crece en tu comunidad universitaria
        </p>
      </div>

      <div className="w-full max-w-md px-4 pb-16">{children}</div>
    </div>
  );
}
