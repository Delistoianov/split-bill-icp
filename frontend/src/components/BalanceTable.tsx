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
      <h3>Saldos</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Participante</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {balances.map((b) => (
            <tr key={b.user}>
              <td>{b.user}</td>
              <td
                style={{
                  color: b.net > 0 ? "green" : b.net < 0 ? "red" : "black",
                }}
              >
                {b.net > 0
                  ? `Receber R$ ${(b.net / 100).toFixed(2)}`
                  : b.net < 0
                  ? `Pagar R$ ${(-b.net / 100).toFixed(2)}`
                  : "OK"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onSettle}>Gerar Acerto</button>
    </div>
  );
}