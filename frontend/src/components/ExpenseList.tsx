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
      <ul>
        {expenses.map((e) => (
          <li key={e.id}>
            <strong>{e.desc}</strong> — R$ {(e.amount / 100).toFixed(2)}<br />
            <span style={{ fontSize: 12 }}>
              Pagou: {e.payer} | Participantes: {e.participants.join(", ")}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={onAddExpense}>Adicionar Despesa</button>{" "}
      <button onClick={onBalances}>Ver Saldos</button>
    </div>
  );
}