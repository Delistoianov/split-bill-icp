import React, { useState } from "react";
import groups from "./mock/groups.json";
import expenses from "./mock/expenses.json";
import balances from "./mock/balances.json";
import settlements from "./mock/settlements.json";
import GroupCard from "./components/GroupCard";
import ExpenseList from "./components/ExpenseList";
import BalanceTable from "./components/BalanceTable";
import SettlementSuggestion from "./components/SettlementSuggestion";

type Page = "home" | "group" | "balances" | "settlements";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [groupId, setGroupId] = useState<number | null>(null);

  const group = groups.find((g) => g.id === groupId);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 600, margin: "0 auto" }}>
      <h1>Churrasplit</h1>
      {page === "home" && (
        <>
          <h2>Grupos</h2>
          {groups.map((g) => (
            <GroupCard
              key={g.id}
              group={g}
              onClick={() => {
                setGroupId(g.id);
                setPage("group");
              }}
            />
          ))}
        </>
      )}
      {page === "group" && group && (
        <>
          <button onClick={() => setPage("home")}>← Voltar</button>
          <h2>{group.name}</h2>
          <ExpenseList
            expenses={expenses.filter((e) => e.groupId === group.id)}
            onAddExpense={() => alert("Mock: abrir modal de despesa")}
            onBalances={() => setPage("balances")}
          />
        </>
      )}
      {page === "balances" && group && (
        <>
          <button onClick={() => setPage("group")}>← Voltar</button>
          <h2>Saldos - {group.name}</h2>
          <BalanceTable
            balances={balances.filter((b) => b.groupId === group.id)}
            onSettle={() => setPage("settlements")}
          />
        </>
      )}
      {page === "settlements" && group && (
        <>
          <button onClick={() => setPage("balances")}>← Voltar</button>
          <h2>Sugestões de Acerto</h2>
          <SettlementSuggestion
            settlements={settlements.filter((s) => s.groupId === group.id)}
          />
        </>
      )}
    </div>
  );
}