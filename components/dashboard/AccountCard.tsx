import { formatCurrency } from "../../lib/format";
type AccountCardProps = {
  name: string;
  balance: number;
};

export default function AccountCard({
  name,
  balance,
}: AccountCardProps) {
  const icon = name === "Banco BPM" ? "🏦" : "💳";

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition hover:border-zinc-700 hover:bg-zinc-800">
      <p className="text-zinc-400">
        {icon} {name}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-white">
        {formatCurrency(balance)}
      </h3>
    </div>
  );
}