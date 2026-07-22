import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await fetch(
      `http://localhost:5000/api/subscription/history/${user.id}`
    );

    const data = await response.json();

    setHistory(data);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex justify-end">
        <BackButton
          title="Back to Dashboard"
          url="/dashboard"
        />
      </div>
      <h1 className="mb-6 text-3xl font-bold">
        Subscription History
      </h1>

      <table className="w-full rounded-lg bg-white shadow">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="p-3">Plan</th>
            <th className="p-3">Billing</th>
            <th className="p-3">Status</th>
            <th className="p-3">Start</th>
            <th className="p-3">End</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-3">
                {item.plan.planName}
              </td>

              <td className="p-3">
                {item.billingCycle}
              </td>

              <td className="p-3">
                {item.status}
              </td>

              <td className="p-3">
                {new Date(
                  item.startDate
                ).toLocaleDateString()}
              </td>

              <td className="p-3">
                {item.endDate
                  ? new Date(
                    item.endDate
                  ).toLocaleDateString()
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}