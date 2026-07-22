import { useEffect, useState } from "react";
import PricingCard from "../components/PricingCard";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { toast } from 'react-hot-toast';

export default function Plans() {
    const [plans, setPlans] = useState([]);
    const [currentSubscription, setCurrentSubscription] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        loadPlans();
        loadCurrentSubscription();
    }, []);

    async function loadPlans() {
        const response = await fetch(
            "http://localhost:5000/api/subscription/plans"
        );

        const data = await response.json();

        const grouped = {};

        data.forEach((plan) => {
            if (!grouped[plan.planName]) {
                grouped[plan.planName] = {
                    planName: plan.planName,
                };
            }

            if (plan.billingType === "Monthly") {
                grouped[plan.planName].monthly = plan;
            }

            if (plan.billingType === "Yearly") {
                grouped[plan.planName].yearly = plan;
            }
        });

        setPlans(Object.values(grouped));
    }

    async function loadCurrentSubscription() {
        const user = JSON.parse(
            localStorage.getItem("user")
        );

        const response = await fetch(
            `http://localhost:5000/api/subscription/current/${user.id}`
        );

        if (!response.ok) return;

        const data = await response.json();

        setCurrentSubscription(data);
    }

    async function subscribe(plan) {
        const user = JSON.parse(localStorage.getItem("user"));
        try {
            toast.loading("Redirecting to Stripe...");
            const response = await fetch(
                "http://localhost:5000/api/stripe/create-checkout-session",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: user.id,
                        planId: plan.id,
                    }),
                }
            );
            
            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            // Redirect to Stripe Checkout
            window.location.href = data.url;
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong.");
        }
    }

    return (
        <div className="min-h-screen bg-slate-100 py-14">
            <div className="flex justify-end">
                <BackButton
                    title="Back to Dashboard"
                    url="/dashboard"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6">

                <h1 className="text-center text-5xl font-bold">
                    Choose Your Plan
                </h1>

                <p className="mt-4 text-center text-gray-500">
                    Simple pricing for everyone.
                </p>

                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingCard
                            key={plan.planName}
                            plan={plan}
                            currentSubscription={currentSubscription}
                            onSubscribe={subscribe}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}