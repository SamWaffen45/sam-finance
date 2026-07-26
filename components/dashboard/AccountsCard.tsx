import { finance } from "../../data/finance";
import AccountCard from "./AccountCard";

export default function AccountsCard() {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {finance.accounts.map((account) => (
        <AccountCard
          key={account.id}
          name={account.name}
          balance={account.balance}
        />
      ))}
    </section>
  );
}