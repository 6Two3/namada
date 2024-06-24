export default function ConnectWallet({ className }: { className?: string }) {
  return (
    <button
      className={`shadow-md capitalize text-sm font-medium py-2 px-3 rounded-lg bg-black dark:bg-yellow text-white dark:text-black ${className}`}
    >
      connect wallet
    </button>
  );
}
