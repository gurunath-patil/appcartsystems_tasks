export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <h1 className="text-3xl font-bold text-slate-800">{title}</h1>

      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>

      <div className="mt-8">{children}</div>
    </div>
  );
}