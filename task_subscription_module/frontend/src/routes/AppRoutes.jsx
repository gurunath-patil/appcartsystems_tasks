import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "../views/AuthLayout"
import Login from "../pages/Login";
import Register from "../pages/Register";
import Plans from "../pages/Plans";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import PaymentSuccess from "../pages/PaymentSuccess";
import PaymentCancel from "../pages/PaymentCancel";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/plans"
            element={<Plans />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/history" element={<History />} />
          <Route
            path="/payment-success"
            element={<PaymentSuccess />}
          />

          <Route
            path="/payment-cancel"
            element={<PaymentCancel />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}