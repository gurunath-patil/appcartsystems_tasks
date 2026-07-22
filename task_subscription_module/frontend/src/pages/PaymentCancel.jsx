import { XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PaymentCancel() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">

        <XCircle
          size={70}
          className="mx-auto text-red-500"
        />

        <h1 className="mt-5 text-3xl font-bold text-slate-800">
          Payment Cancelled
        </h1>

        <p className="mt-3 text-slate-500">
          Your payment was cancelled. No subscription has been activated.
        </p>

        <button
          onClick={() => navigate("/plans")}
          className="mt-8 w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Back to Plans
        </button>

      </div>
    </div>
  );
}