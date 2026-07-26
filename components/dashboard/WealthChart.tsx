"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { month: "Gen", value: 8200 },
  { month: "Feb", value: 8700 },
  { month: "Mar", value: 9100 },
  { month: "Apr", value: 9800 },
  { month: "Mag", value: 10500 },
  { month: "Giu", value: 11200 },
  { month: "Lug", value: 12035 },
];

export default function WealthChart() {
  return (
    <section className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
          Andamento Patrimonio
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          Ultimi 7 mesi
        </h2>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="wealth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={3}
              fill="url(#wealth)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}