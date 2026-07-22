import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">

        <CheckCircle
          size={70}
          className="mx-auto text-green-500"
        />

        <h1 className="mt-5 text-3xl font-bold text-slate-800">
          Payment Successful
        </h1>

        <p className="mt-3 text-slate-500">
          Your subscription payment was completed successfully.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Go to Dashboard
        </button>

      </div>
    </div>
  );
}