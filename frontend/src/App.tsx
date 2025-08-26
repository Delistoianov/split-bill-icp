// path: churrasplit/frontend/src/App.tsx
import React, { useState } from "react";
import groups from "./mock/groups.json";
import expenses from "./mock/expenses.json";
import balances from "./mock/balances.json";
import settlements from "./mock/settlements.json";
import GroupCard from "./components/GroupCard";
import ExpenseList from "./components/ExpenseList";
import BalanceTable from "./components/BalanceTable";
import SettlementSuggestion from "./components/SettlementSuggestion";
import AddExpenseModal from "./components/AddExpenseModal";
import logo from "./assets/logo.png";

type Page = "home" | "group" | "balances" | "settlements";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [groupId, setGroupId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const group = groups.find((g) => g.id === groupId);

  const handleSaveExpense = (expense: { desc: string; amount: number; payer: string; participants: string[] }) => {
    console.log("Nova despesa (mock):", {
      id: Math.random(),
      groupId: groupId,
      ...expense,
      createdAt: Date.now(),
    });
    alert(`Despesa "${expense.desc}" adicionada! (Mock)`);
  };

  return (
    <div className="container">
      <header className="app-header">
        <img src={logo} alt="Churrasplit Logo" className="app-logo" />
        <h1>Churrasplit</h1>
      </header>

      {page === "home" && (
        <div className="card">
          <h2>Meus Grupos</h2>
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
        </div>
      )}

      {page === "group" && group && (
        <div className="card">
          <div className="nav-header">
            <button className="btn btn-secondary" onClick={() => setPage("home")}>
              ← Voltar
            </button>
            <h2>{group.name}</h2>
          </div>
          <ExpenseList
            expenses={expenses.filter((e) => e.groupId === group.id)}
            onAddExpense={() => setIsModalOpen(true)}
            onBalances={() => setPage("balances")}
          />
        </div>
      )}

      {page === "balances" && group && (
        <div className="card">
          <div className="nav-header">
            <button className="btn btn-secondary" onClick={() => setPage("group")}>
              ← Voltar
            </button>
            <h2>Saldos - {group.name}</h2>
          </div>
          <BalanceTable
            balances={balances.filter((b) => b.groupId === group.id)}
            onSettle={() => setPage("settlements")}
          />
        </div>
      )}

      {page === "settlements" && group && (
        <div className="card">
          <div className="nav-header">
            <button className="btn btn-secondary" onClick={() => setPage("balances")}>
              ← Voltar
            </button>
            <h2>Sugestões de Acerto</h2>
          </div>
          <SettlementSuggestion
            settlements={settlements.filter((s) => s.groupId === group.id)}
          />
        </div>
      )}

      {group && (
          <AddExpenseModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSaveExpense}
            group={group}
          />
      )}
    </div>
  );
}