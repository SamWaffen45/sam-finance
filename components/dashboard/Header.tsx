import { IconSettings } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          💰 Sam Finance
        </h1>
        <p className="text-zinc-400">
          Buongiorno, Sam 👋
        </p>
      </div>

      <button className="rounded-xl bg-zinc-800 p-3 hover:bg-zinc-700 transition">
        <IconSettings size={22} />
      </button>
    </header>
  );
}