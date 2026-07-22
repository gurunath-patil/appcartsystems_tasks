import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Outlet />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}