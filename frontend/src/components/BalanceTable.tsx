// path: churrasplit/frontend/src/components/BalanceTable.tsx
import React from "react";

type Balance = {
  groupId: number;
  user: string;
  net: number;
};

export default function BalanceTable({
  balances,
  onSettle,
}: {
  balances: Balance[];
  onSettle: () => void;
}) {
  return (
    <div>
      <h3>Balanço do Grupo</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Participante</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {balances.map((b) => (
            <tr key={b.user}>
              <td>{b.user}</td>
              <td className={b.net > 0 ? "balance-positive" : b.net < 0 ? "balance-negative" : ""}>
                {b.net > 0
                  ? `Recebe R$ ${(b.net / 100).toFixed(2)}`
                  : b.net < 0
                  ? `Paga R$ ${(-b.net / 100).toFixed(2)}`
                  : "Zerado"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <button className="btn" onClick={onSettle}>Sugerir Acertos</button>
    </div>
  );
}