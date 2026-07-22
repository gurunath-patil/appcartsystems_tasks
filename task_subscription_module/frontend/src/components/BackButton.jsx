import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ title, url }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(url)}
      className="mb-6 flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700 shadow-sm transition hover:bg-slate-100"
    >
      <ArrowLeft size={18} />
      {title}
    </button>
  );
}