import { finance } from "../../data/finance";
import { formatCurrency } from "../../lib/format";

export default function GoalCard() {
  const progress =
    (finance.goal.current / finance.goal.target) * 100;

  const remaining =
    finance.goal.target - finance.goal.current;

  return (
    <section className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
      <p className="uppercase tracking-wider text-zinc-400">
        🎯 Obiettivo
      </p>

      <h2 className="mt-3 text-4xl font-bold text-white">
        {formatCurrency(finance.goal.target)}
      </h2>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-3 flex justify-between text-sm">
        <span className="text-zinc-500">
          Mancano {formatCurrency(remaining)}
        </span>

        <span className="font-semibold text-blue-400">
          {progress.toFixed(0)}%
        </span>
      </div>
    </section>
  );
}