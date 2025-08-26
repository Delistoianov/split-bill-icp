// path: churrasplit/frontend/src/components/ExpenseList.tsx
import React from "react";

type Expense = {
  id: number;
  groupId: number;
  payer: string;
  amount: number;
  desc: string;
  participants: string[];
  createdAt: number;
};

export default function ExpenseList({
  expenses,
  onAddExpense,
  onBalances,
}: {
  expenses: Expense[];
  onAddExpense: () => void;
  onBalances: () => void;
}) {
  return (
    <div>
      <h3>Despesas</h3>
      <ul className="list">
        {expenses.map((e) => (
          <li key={e.id} className="list-item">
            <strong>{e.desc}</strong> — R$ {(e.amount / 100).toFixed(2)}
            <br />
            <span style={{ fontSize: 14, color: "#666" }}>
              Pagou: {e.payer} | Para: {e.participants.join(", ")}
            </span>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={onAddExpense}>Adicionar Despesa</button>
      <button className="btn" onClick={onBalances}>Ver Saldos</button>
    </div>
  );
}