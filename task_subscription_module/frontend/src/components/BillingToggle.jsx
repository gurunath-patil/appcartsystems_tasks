export default function BillingToggle({
  billing,
  setBilling,
}) {
  return (
    <div className="mt-5 flex overflow-hidden rounded-lg border">

      <button
        onClick={() => setBilling("Monthly")}
        className={`flex-1 py-2 ${
          billing === "Monthly"
            ? "bg-indigo-600 text-white"
            : "bg-white"
        }`}
      >
        Monthly
      </button>

      <button
        onClick={() => setBilling("Yearly")}
        className={`flex-1 py-2 ${
          billing === "Yearly"
            ? "bg-indigo-600 text-white"
            : "bg-white"
        }`}
      >
        Yearly
      </button>

    </div>
  );
}