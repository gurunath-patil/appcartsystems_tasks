export default function AuthButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children}
    </button>
  );
}