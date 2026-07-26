import { finance } from "../../data/finance";

export default function BalanceCard() {
  const progress = (finance.goal.current / finance.goal.target) * 100;

  const remaining = finance.goal.target - finance.goal.current;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 shadow-2xl">
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl"></div>

      <div className="relative">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
          Patrimonio Totale
        </p>

        <h2 className="mt-3 text-5xl font-extrabold tracking-tight text-white">
          € {finance.totalBalance.toLocaleString("it-IT")}
        </h2>

        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-400">
            +{finance.monthlyGrowth.toLocaleString("it-IT")} €
          </span>

          <span className="text-sm text-zinc-400">
            questo mese
          </span>
        </div>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-sm text-zinc-400">
            <span>Progresso obiettivo</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-700"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <p className="mt-3 text-sm text-zinc-500">
          Mancano € {remaining.toLocaleString("it-IT")} per raggiungere
          l'obiettivo.
        </p>
      </div>
    </section>
  );
}