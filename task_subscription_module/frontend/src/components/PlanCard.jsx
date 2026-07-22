import { useState } from "react";

export default function PlanCard({
    plan,
    onSubscribe,
}) {

    const [billing, setBilling] = useState("Monthly");

    const current =
        billing === "Monthly"
            ? plan.monthly
            : plan.yearly;

    const isCurrent =
        currentSubscription &&
        currentSubscription.plan.id === current.id;
    return (

        <div className="rounded-2xl border bg-white p-6 shadow-lg">

            <h2 className="text-3xl font-bold">

                {plan.planName}

            </h2>

            {plan.planName !== "Free" && (

                <div className="mt-5 flex gap-2">

                    <button
                        onClick={() => setBilling("Monthly")}
                        className={`rounded-lg px-4 py-2 ${billing === "Monthly"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200"
                            }`}
                    >
                        Monthly
                    </button>

                    <button
                        onClick={() => setBilling("Yearly")}
                        className={`rounded-lg px-4 py-2 ${billing === "Yearly"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200"
                            }`}
                    >
                        Yearly
                    </button>

                </div>

            )}

            <div className="mt-6">

                <span className="text-5xl font-bold">

                    ₹{current.price}

                </span>

                <span>

                    /{current.billingType}

                </span>

            </div>

            <ul className="mt-6 space-y-2">

                {current.features
                    .split(",")
                    .map((feature) => (

                        <li key={feature}>

                            ✔ {feature}

                        </li>

                    ))}

            </ul>

            <button
                onClick={() => onSubscribe(current)}
                disabled={isCurrent}
                className={`mt-8 w-full rounded-lg py-3 text-white ${isCurrent
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
            >
                {isCurrent ? "Current Plan" : "Subscribe"}
            </button>

        </div>

    );

}