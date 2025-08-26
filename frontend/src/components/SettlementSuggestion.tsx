// path: churrasplit/frontend/src/components/SettlementSuggestion.tsx
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
      <h3>Transferências Sugeridas</h3>
      <ul className="list">
        {settlements.map((s, i) => (
          <li key={i} className="list-item">
            <span className="balance-negative">{s.from}</span> deve pagar <span className="balance-positive">R$ {(s.amount / 100).toFixed(2)}</span> para <strong>{s.to}</strong>
          </li>
        ))}
      </ul>
      <br/>
      <button className="btn" onClick={() => alert("Acerto finalizado e registrado no histórico!")}>
        Confirmar Acerto
      </button>
    </div>
  );
}