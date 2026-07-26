
import Header from "../components/dashboard/Header";
import BalanceCard from "../components/dashboard/BalanceCard";
import AccountsCard from "../components/dashboard/AccountsCard";
import GoalCard from "../components/dashboard/GoalCard";
import WealthChart from "../components/dashboard/WealthChart";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-8 space-y-6">
        <Header />

        <BalanceCard />

        <AccountsCard />

        <GoalCard />
        <WealthChart />
      </div>
    </main>
  );
}
