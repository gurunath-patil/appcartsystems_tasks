import { useState } from "react";
import BillingToggle from "./BillingToggle";

export default function PricingCard({
  plan,
  currentSubscription,
  onSubscribe,
}) {
  const [billing, setBilling] = useState("Monthly");

  const selected =
    billing === "Monthly"
      ? plan.monthly
      : plan.yearly;

  const active =
    currentSubscription &&
    currentSubscription.plan.id === selected?.id;

  return (
    <div
      className={`rounded-2xl border bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl ${
        plan.planName === "Basic"
          ? "border-indigo-500"
          : ""
      }`}
    >
      {plan.planName === "Basic" && (
        <div className="mb-4 inline-block rounded-full bg-indigo-600 px-3 py-1 text-sm text-white">
          Most Popular
        </div>
      )}

      <h2 className="text-3xl font-bold">
        {plan.planName}
      </h2>

      <p className="mt-2 text-gray-500">
        {selected.description}
      </p>

      {plan.planName !== "Free" && (
        <BillingToggle
          billing={billing}
          setBilling={setBilling}
        />
      )}

      <div className="mt-8">

        <span className="text-5xl font-bold">
          ₹{selected.price}
        </span>

        <span className="text-gray-500">
          /{selected.billingType}
        </span>

      </div>

      <ul className="mt-8 space-y-3">

        {selected.features
          .split(",")
          .map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2"
            >
              <span className="text-green-500">
                ✔
              </span>

              {feature}
            </li>
          ))}

      </ul>

      <button
        disabled={active}
        onClick={() => onSubscribe(selected)}
        className={`mt-10 w-full rounded-lg py-3 text-white ${
          active
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {active
          ? "Current Plan"
          : "Subscribe"}
      </button>

    </div>
  );
}