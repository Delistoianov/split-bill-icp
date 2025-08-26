import React from "react";

type Settlement = {
  groupId: number;
  from: string;
  to: string;
  amount: number;
};

export default function SettlementSuggestion({
  settlements,
}: {
  settlements: Settlement[];
}) {
  if (settlements.length === 0) {
    return <div>Tudo certo! Nenhum acerto necessário.</div>;
  }
  return (
    <div>
      <h3>Transferências sugeridas</h3>
      <ul>
        {settlements.map((s, i) => (
          <li key={i}>
            <strong>{s.from}</strong> paga <strong>R$ {(s.amount / 100).toFixed(2)}</strong> para <strong>{s.to}</strong>
          </li>
        ))}
      </ul>
      <button onClick={() => alert("Mock: acerto realizado!")}>Finalizar Acerto</button>
    </div>
  );
}