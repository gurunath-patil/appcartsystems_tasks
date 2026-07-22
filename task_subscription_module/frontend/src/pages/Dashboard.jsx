import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

export default function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    loadSubscription();
  }, []);

  async function loadSubscription() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/subscription/current/${user.id}`
      );

      if (!response.ok) return;

      const data = await response.json();

      setSubscription(data);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  async function cancelSubscription() {
    const confirmCancel = window.confirm("Are you sure you want to cancel your subscription?");

    if (!confirmCancel) return;

    const response = await fetch(
      "http://localhost:5000/api/subscription/cancel",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
        }),
      }
    );

    const data = await response.json();

    toast.success(data.message);
    setSubscription(null);
    loadSubscription();
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="mx-auto max-w-4xl">

        <h1 className="mb-2 text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mb-8 text-gray-500">
          Welcome, {user.name}
        </p>

        <div className="rounded-xl bg-white p-8 shadow">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">
              Current Subscription
            </h2>
            <button
              onClick={cancelSubscription}
              className="ms-3 rounded-lg hover:bg-red-600 px-2 text-white bg-red-400"
            >
              Cancel Subscription
            </button>
          </div>

          {subscription ? (
            <div className="mt-6 space-y-3">

              <p>
                <strong>Plan :</strong>{" "}
                {subscription.plan.planName}
              </p>

              <p>
                <strong>Billing :</strong>{" "}
                {subscription.billingCycle}
              </p>

              <p>
                <strong>Status :</strong>{" "}
                {subscription.status}
              </p>

              <p>
                <strong>Started :</strong>{" "}
                {new Date(
                  subscription.startDate
                ).toLocaleDateString()}
              </p>

            </div>
          ) : (
            <p className="mt-6 text-gray-500">
              No active subscription
            </p>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">

          <button
            onClick={() => navigate("/plans")}
            className="rounded-lg bg-indigo-600 px-6 py-3 text-white"
          >
            View Plans
          </button>

          <button
            onClick={() => navigate("/history")}
            className="rounded-lg bg-green-600 px-6 py-3 text-white"
          >
            Subscription History
          </button>

          <button
            onClick={logout}
            className="rounded-lg bg-red-600 px-6 py-3 text-white"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}